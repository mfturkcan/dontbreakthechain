using DontBreakTheChain.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DontBreakTheChain.DataAccess
{
    public class ChainDbContext : IdentityDbContext<User>
    {
        public ChainDbContext(DbContextOptions<ChainDbContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseLazyLoadingProxies();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Chain>()
                .HasMany(x => x.ChainParts)
                .WithOne(x => x.Chain)
                .OnDelete(DeleteBehavior.NoAction);

            builder.Entity<IdentityRole>()
                .HasData(
                   new IdentityRole { Name = "Member", NormalizedName = "MEMBER" },
                    new IdentityRole { Name = "Admin", NormalizedName = "ADMIN" }
                );
        }

        public DbSet<Chain> Chains { get; set; }
        public DbSet<ChainPart> ChainParts { get; set; }
    }
}
