using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using SequenceTasks.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Autofac.Extensions.DependencyInjection;
using Autofac;

namespace SequenceTasks
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)//IConfiguration configuration)
        {
           // Configuration = configuration;

            var builder = new ConfigurationBuilder()
        .SetBasePath(env.ContentRootPath)
        .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
        .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
        .AddEnvironmentVariables();
            this.Configuration = builder.Build();
        }
        public IContainer ApplicationContainer { get; private set; }

        public IConfigurationRoot Configuration { get; private set; }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {            
            services.AddMvc();
            services.AddDbContext<TasksContext>(options => 
            options.UseSqlServer(Configuration.GetConnectionString("SequenceTasks")));

           
            var builder = new ContainerBuilder();
           
            builder.RegisterType<Repository>().As<IRepository>();
            builder.RegisterType<TasksContext>().InstancePerRequest();
            builder.Populate(services);
            this.ApplicationContainer = builder.Build();
           
            return new AutofacServiceProvider(this.ApplicationContainer);
        }

        public void Configure(
            IApplicationBuilder app,
           // IAppBuilder app,
            IHostingEnvironment env,
            ILoggerFactory loggerFactory,
            IApplicationLifetime appLifetime)
        {
            loggerFactory.AddConsole(this.Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            var builder = new ContainerBuilder();
            var container = builder.Build();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();
           
            appLifetime.ApplicationStopped.Register(() => this.ApplicationContainer.Dispose());
        }










        // public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        //public void ConfigureServices(IServiceCollection services)
        //{
        //    services.AddMvc();
        //    services.AddEntityFrameworkSqlServer();

        //   // Add ApplicationDbContext.
        //     services.AddDbContext<TasksContext>(options =>
        //         options.UseSqlServer(Configuration.GetConnectionString("SequenceTasks"))
        //         );
        //    services.AddScoped<IRepository, Repository>();

        //    // string connection = Configuration.GetConnectionString("SequenceTasks");
        //    // services.AddDbContext<TasksContext>(options => options.UseSqlServer(connection));


        //}

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        //public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        //{
        //    if (env.IsDevelopment())
        //    {
        //        app.UseDeveloperExceptionPage();

        //    }
        //    else
        //    {
        //        app.UseExceptionHandler("/Home/Error");
        //    }

        //    app.UseMvc(routes =>
        //    {
        //        routes.MapRoute(
        //            name: "default",
        //            template: "{controller=Home}/{action=Index}/{id?}");

        //    });


        //    using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
        //    {
        //        var dbContext = serviceScope.ServiceProvider.GetService<TasksContext>();

        //        //  DbSeeder.Seed(dbContext);
        //    }

        //}


    }
}
