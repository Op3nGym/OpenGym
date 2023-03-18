namespace Gym.API.Services;

using Gym.API.DTOs;
using Gym.Domain.Repositories;
using Mapster;

public class GymService
{
    private readonly IGymRepository _gymRepository;

    public GymService(IGymRepository gymRepository)
    {
        _gymRepository = gymRepository;
    }

    public async Task<IEnumerable<GymDTO>> GetAllAsync()
    {
        var gyms = await _gymRepository.GetAllAsync();
        return gyms.Adapt<IEnumerable<GymDTO>>();
    }

    public async Task<GymDTO> GetByIdAsync(int id)
    {
        var gym = await _gymRepository.GetByIdAsync(id);
        return gym.Adapt<GymDTO>();
    }

    public async Task AddAsync(GymDTO gymDTO)
    {
        var gym = gymDTO.Adapt<Domain.Entities.Gym>();
        await _gymRepository.AddAsync(gym);
        await _gymRepository.SaveChangesAsync();
    }

    public async Task UpdateAsync(GymDTO gymDTO)
    {
        var gym = gymDTO.Adapt<Domain.Entities.Gym>();
        _gymRepository.Update(gym);
        await _gymRepository.SaveChangesAsync();
    }

    public async Task DeleteAsync(int id)
    {
        var gym = await _gymRepository.GetByIdAsync(id);
        _gymRepository.Remove(gym);
        await _gymRepository.SaveChangesAsync();
    }
}
