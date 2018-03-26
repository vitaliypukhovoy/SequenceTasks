using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SequenceTasks.Model;

namespace SequenceTasks.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {

        private IRepository repo;
        public ValuesController(IRepository _repo)
        {
            this.repo = _repo;
        }
        [HttpGet]
        public async Task<IEnumerable<iTask>> Get()
        {
            return await repo.RetrieveAllAsync();
        }

        [HttpGet("{number}")]
        public async Task<ActionResult> Get(string number)
        {

            var t = await repo.RetrieveAsync(number);

            if (t == null)
            {
                return new NotFoundResult();
            }
            else
                return new ObjectResult(t);
        }

        // POST api/values
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] iTask task)
        {
            if (task == null)
            {
                new BadRequestResult();
            }

            iTask added = await repo.CreateAsync(task);
            return CreatedAtRoute("Get", new { id = added.Id }, task);

        }

        // PUT api/values/5
        [HttpPut("{number}")]
        public async Task<ActionResult> Put(string number, [FromBody] iTask task)
        {

            if (number == null || task.number.ToString() != number)
            {
                return new BadRequestResult();    
            }
            var t = await repo.RetrieveAsync(number);
            if (t == null)
            {
                return NotFound();  	
            }
             await repo.UpdateAsync(number,task);
            return new NoContentResult();	

        }

        // DELETE api/values/5
        [HttpDelete("{number}")]
        public async Task<IActionResult> Delete(string number)
        {
            var delete = await repo.RetrieveAsync(number);
            if (delete == null)
            {
               return new NoContentResult();
            }
            else
            {
              return  new BadRequestResult();

            }
         

        }

    }
}
