using Microsoft.EntityFrameworkCore;

namespace SequenceTasks.Model
{
    public class TasksContext:DbContext
    {
        public DbSet<iTask>Tasks { get; set; }
        public TasksContext(DbContextOptions<TasksContext> options)
            : base(options)
        {
                
        }

    }
}
