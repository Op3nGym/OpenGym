using ContosoUniversity.Data;

namespace ContosoUniversity.Types;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class CreateCourseMutation
{
    public async Task<CreateCoursePayload> CreateCourse(
        CreateCourseInput input, 
        SchoolContext context)
    {
        var course = new Course
        {
            Title = input.Title,
            Credits = input.Credits,
        };

        context.Courses.Add(course);
        await context.SaveChangesAsync();

        return new CreateCoursePayload(course);
    }
}