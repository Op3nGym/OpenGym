using Gym.Domain.Repositories;
using Gym.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Gym.Infrastructure.Repositories;

public class GymRepository : IGymRepository
{
    private readonly GymDbContext _context;

    public GymRepository(GymDbContext context)
    {
        _context = context;
    }

    public async Task AddAsync(Domain.Entities.Gym gym)
    {
        await _context.Gyms.AddAsync(gym);
    }

    public async Task<IEnumerable<Domain.Entities.Gym>> GetAllAsync()
    {
        return await _context.Gyms.ToListAsync();
    }

    public async Task<Domain.Entities.Gym?> GetByIdAsync(int id)
    {
        return await _context.Gyms.FindAsync(id);
    }

    public void Update(Domain.Entities.Gym gym)
    {
        _context.Entry(gym).State = EntityState.Modified;
    }

    public void Remove(Domain.Entities.Gym gym)
    {
        _context.Gyms.Remove(gym);
    }

    public async Task SaveChangesAsync()
    {
        await _context.SaveChangesAsync();
    }
}
