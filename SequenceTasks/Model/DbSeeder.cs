using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using SequenceTasks.Model;

namespace SequenceTasks.Model
{
    public  static class  DbSeeder
    {      
        public static void  Seed(TasksContext DbContext)
        {           

            if (!DbContext.Tasks.Any())
            {
                CreateTask(DbContext);
            }

        }  

        private  static async void CreateTask(TasksContext DbContext)
        {

            DbContext.Database.EnsureCreated();

              var items  = new List<iTask> {
                new iTask{number= 1, Taska ="Do do homework" },
                new iTask{number= 1, Taska ="Do do homework2" },
                new iTask{number= 1, Taska ="Do do homework3" }

            };

            items.ForEach(s => DbContext.Tasks.Add(s));            

            await DbContext.SaveChangesAsync();
        }
    }
}
