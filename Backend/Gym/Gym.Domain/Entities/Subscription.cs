namespace Gym.Domain.Entities;

public class Subscription
{
    public int Id { get; set; }
    public int GymId { get; set; }
    public string CustomerId { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }

    public Gym Gym { get; set; }
}