using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using System.Collections.Concurrent;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using SequenceTasks.Model;

namespace SequenceTasks.Model
{
    public class Repository : IRepository 
    {
        
        private static ConcurrentDictionary<string, iTask> iTaskCache;
        private TasksContext db;
        public Repository(TasksContext db)
        {
            this.db = db;           
            if (iTaskCache == null)
            {
                iTaskCache = new ConcurrentDictionary<string, iTask>(
                db.Tasks.ToDictionary(c => c.Id.ToString()));
            }
        }
        public async Task<iTask> CreateAsync(iTask c)
        {            
            EntityEntry<iTask> added = await db.Tasks.AddAsync(c);
            int affected = await db.SaveChangesAsync();
            if (affected == 1)
            {             
                return iTaskCache.AddOrUpdate(c.Id.ToString(), c,
                UpdateCache);
            }
            else
            {
                return null;
            }
        }
        public async Task<IEnumerable<iTask>> RetrieveAllAsync()
        {         
            return await Task.Run<IEnumerable<iTask>>(
            () => iTaskCache.Values);
        }
        public async Task<iTask> RetrieveAsync(string id)
        {
            return await Task.Run(() =>
            {               
                id = id.ToUpper();
                iTask c;
                iTaskCache.TryGetValue(id, out c);
                return c;
            });
        }
        private iTask UpdateCache(string id, iTask c)
        {
            iTask old;
            if (iTaskCache.TryGetValue(id, out old))
            {
                if (iTaskCache.TryUpdate(id, c, old))
                {
                    return c;
                }
            }
            return null;
        }
        public async Task<iTask> UpdateAsync(string id, iTask c)
        {
            return await Task.Run(() =>
            {                
              
                db.Tasks.Update(c);
                int affected = db.SaveChanges();
                if (affected == 1)
                {                 
                    return Task.Run(() => UpdateCache(id, c));
                }
                return null;
            });
        }
        public async Task<bool> DeleteAsync(string id)
        {
            return await Task.Run(() =>
            {
                id = id.ToUpper();
               
                iTask c = db.Tasks.Find(id);
                db.Tasks.Remove(c);
                int affected = db.SaveChanges();
                if (affected == 1)
                {                   
                    return Task.Run(() => iTaskCache.TryRemove(id, out c));
                }
                else
                {
                    return null;
                }
            });
        }

    }
}
