using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Linq.Expressions;
using SequenceTasks.Model;

namespace SequenceTasks.Model
{
    public interface IRepository 
    {
        Task<iTask> CreateAsync(iTask task);
        Task<IEnumerable<iTask>> RetrieveAllAsync();
        Task<iTask> RetrieveAsync(string id);
        Task<iTask> UpdateAsync(string id, iTask task);
        Task<bool> DeleteAsync(string id);
    }
}
