using Gym.API.DTOs;
using Gym.API.Services;
using Mapster;
using Microsoft.AspNetCore.Mvc;

namespace Gym.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class GymsController : ControllerBase
{
    private readonly GymService _gymService;

    public GymsController(GymService gymService)
    {
        _gymService = gymService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<GymDTO>>> GetGyms()
    {
        return Ok(await _gymService.GetAllAsync());
    }

    // Implement other methods for GetGymById, CreateGym, UpdateGym, DeleteGym
    [HttpGet("{id}")]
    public async Task<ActionResult<GymDTO>> GetGymById(int id)
    {
        var gym = await _gymService.GetByIdAsync(id);
        if (gym == null)
        {
            return NotFound();
        }
        return Ok(gym);
    }

    [HttpPost]
    public async Task<ActionResult<GymDTO>> CreateGym(GymDTO gymDTO)
    {
        await _gymService.AddAsync(gymDTO);
        return CreatedAtAction(nameof(GetGymById), new { id = gymDTO.Id }, gymDTO);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateGym(int id, GymDTO gymDTO)
    {
        if (id != gymDTO.Id)
        {
            return BadRequest();
        }
        await _gymService.UpdateAsync(gymDTO);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteGym(int id)
    {
        var gym = await _gymService.GetByIdAsync(id);
        if (gym == null)
        {
            return NotFound();
        }
        await _gymService.DeleteAsync(id);
        return NoContent();
    }
}