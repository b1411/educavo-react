import Parse from "parse";

// simplest form (only email)
const SubscribeForm = () => {
  async function handleEmail(e) {
    e.preventDefault();
    try {
        if(document.cookie.split(';').some((item) => item.trim().startsWith('subscribed='))) {
            alert("Вы уже подписаны на наши новости");
            return;
        }
        const Newsletter = Parse.Object.extend('emails');
        const newsletter = new Newsletter();
        newsletter.set('email', e.target[0].value);
        await newsletter.save();
        document.cookie = "subscribed=true; max-age=3600; path=/; samesite=true; secure=true";
        alert("Вы успешно подписались на наши новости");
    }
    catch(error) {
        alert(error.message);
    }
  }
  return (
    <form onSubmit={(e) => handleEmail(e)}>
      <input type="email" placeholder="Введите ваш email" required />
      <button type="submit">Подписаться</button>
    </form>
  );
};

export default SubscribeForm;
