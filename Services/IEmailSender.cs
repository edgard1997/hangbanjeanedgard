using System.Threading.Tasks;

namespace DevApp.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string subject, string htmlMessage, string senderEmail, string senderName);
    }
}


