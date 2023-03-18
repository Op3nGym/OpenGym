namespace Gym.Domain.Entities;
public class Gym
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Address { get; set; }
    public string OwnerId { get; set; }
    public ICollection<Subscription> Subscriptions { get; private set; }

    public Gym()
    {
        Subscriptions = new List<Subscription>();
    }
}
