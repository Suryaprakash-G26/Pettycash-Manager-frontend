const Footer = () => {
  return (
    <>
<div className="btm-nav">

<footer className="footer items-center p-4 bg-neutral text-neutral-content">
  <aside className="items-center grid-flow-col">
    <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> 
    <p>Copyright © 2023 - All right reserved</p>
  </aside> 
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://www.linkedin.com/in/surya-prakash-6b2914191/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <label
              tabIndex={0}
              className="btn btn-ghost hover:animate-pulse btn-square avatar"
            >
              <div className="w-10 rounded-full">
                <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEUAAAD///8gICCgoKD19fWVlZXf399tbW3IyMjR0dGnp6eZmZnv7+9wcHD8/PzNzc2Ghoa4uLh6enqvr69ISEi+vr4zMzPl5eXExMTW1tZcXFwpKSmKiorq6uo5OTkaGhokJCRkZGRTU1NBQUF9fX0RERFWVlYTExNLS0tuJKmtAAAFGElEQVR4nO3d2XbiMAwGYBtIIUBTdgqFAt2G93/CYWmZwCSW7KAjK9V/NReTou8Q4sRbjM2nP03ak1lDcF7ed6vhOm8yuX+PX01N8tItEva4y7pvurfCJ+6K7p5Z/0qYcNdDkTQnbHMXQ5Oni/CRuxSqzL+FTe5CyLI5Cx+46yBMchLWphUsSusgfOYugjSrg3DCXQRtrOlzl0CchRlyl0Ccrhlwl0CckVlyl0CcN1PrtuKQmdlyl0CcrWlwl0CchgrFR4Xyo0L5UaH8qFB+VCg/KpQfFcqPCuUnSPjaHiTJYPdy/3II4i8cpJeR/6wjYODRVzi218miHx73Ez7a/9N/JyvuLvES3n6B3/mgK+8O8RE+FwOtjXrow0NY8g0es6MssWLwwqLf4CWkNVYLXugC2g5pkZWCFnadwoiHytFCNzDiLxErHADCeH+JWGEKCaNtFLFCCGinxIUGByl8BYVr6kpDgxS2QWG0P0SkELzQWLuhLjUwSGECC2Od04EUrmov/ICFf6hLDQxSuISF1JWGBin8BIFz6kpDg23x+5Aw2imOWOEQEkbb64YVgj9E4jrDg356Ak7TMW2ZFYIWjtzCT9oyKwTfi/HgAka87g0vfHEAo20qjFdvYvnzRUZZYdX49AiX3bplUQ9CefXq78SdosZ3ZGazEHWROcV3dG15bczG8TYT3/EfId0mnXPrnz2MYx6v+EngOP7nJtbHwf+iMxXkR4Xyo0L5UaH8qFB+VCg/sQnfVsN03To9u7Tm6TCpvtI8JuE2KXjAtvNxNSVSOHrqOFPUITx1H5J+3XxEeXdlNqwwwxMp7JV+enlfTQYcczXS8dFy/+dF8Bd5p1Huok18gJrze1O9rYH/e/yIwIllUQgd8zrzCRvAi0C4meOAh6vrm0jhBOs7ZiVQiJghkI//mcot9AQGTPNkFnqdouf4btzFK2z4A72Hm3mF4AyPwvhNZWUVdoKAnhPMGIU7xFSy4njNZWUUBgP9trJkFEJ35q54jDozCqvEY09goUKPFSxShWnthfgWQ6wQfQsuVoieDClXOKq9ENtgxCOcp8+dFN2hYdGnaRzCfvPSvr33EP1upyD3kY9BuL6ZeLTDPVQhr6YRCAt2ZUB1LyKfMNiFWWGHPWIVEvaHyC3MSpa8QcMIx+Bm1XELt2WfCC7Lxb6Tg1noGG+BD8YtzOUVurrNmuDRuHc6sApbzs+seHgUQvetJbjUCncx5RQC7yz4AoWz2IXQtRDsqvoC/gC7EJpIDXYYo1YEMgrBuy6w1UftbcQoBJuzHSRENfmMQrDjegsJUYtZGIXwiDUkRHXuMwrhjpbKZwGzEL4SQn0a3ciFcC+Ec9lqLYTQE5QKVahCFapQhSr8DcLY70tVqEIVqlCFKlShClWoQhWqUIUqVKEKVahCFapQhSpUoQpVqEIVqlCFKlShClWoQhWqUIUqVGFZyPegLUzRtsJUwmW36UzRGqae+5AuvDfwAPgLqAX5Me0FTRMVyo8K5UeF8qNC+VGh/KhQflQoPyqUn98gRG0nJTgzs+cugTh7g92PV2oeDWpBtOD0zIK7BOJ0DHpjbKHJTMg7lARlaQ20faHwPB+E6N3NJaZhj8KMuwzCTE9C5Ha1ErO3Z2F9z9PWj9CGvHZPQJ7sRVhP4nmf3p/tF2t4ok7tlTDwHZgR52dPwn9baLZq9TUOLq78JqFr1La1EjLIvUDiZhvURXO0nzUEZzZp965nqfwF8+lXviuUOPUAAAAASUVORK5CYII="
                  alt="LinkedIn"
                />
              </div>
            </label>
          </a>
          <a
            href="https://github.com/Suryaprakash-G26"
            target="_blank"
            rel="noopener noreferrer"
          >
            <label
              tabIndex={0}
              className="btn btn-ghost hover:animate-pulse btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img       
                src="data:image/png;base64,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"
                alt="Github"
                />
              </div>
            </label>
          </a>
          <a
            href="mailto:gsurya124@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <label
              tabIndex={0}
              className="btn btn-ghost hover:animate-pulse btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEUAAAD///9KSkr6+vqGhobv7+/BwcH39/fo6Oj09PTJycnExMRcXFwbGxvX19fS0tIvLy+ioqKSkpKurq5RUVEICAhvb2+cnJw/Pz80NDS0tLRoaGg5OTkmJiZ8fHxFRUXg4OCLi4sSEhKhoaEZGRkoKChYWFhtbW1+fn6KMhrCAAAJy0lEQVR4nO2da4OiOgyGpwoFkYuKguIVnXH9/7/wwHpwuBQoTQpF9/286/bZljZJk/SLvLu+hh6AdP0jHL96ITQuHo38ZRiungrDpR9R6zLr4x+XTGjSmxbs7cl2d3SuX7+6OsfFdnLfB9qNmnKHII/QoLG9XRS4WLomqHZM5U2nFMKpHu2/W8gqpHakT2UMBp1QNy1t0ZEu0+JhmTr2gHAJdZcGjiDeU05AXVxIRMKpF51EZ68wk6fIQ1yvaIS6r50R8J46az7aRCIRuisbtjrLcuyVizM0FEIv2KHiPbULPIzBIRBaEwl4T02s4Qln1kEaX6qdBbUFYIT63JbKl8qewzYdCKFBA+l8qQJqDENoacdeAL++jhrgexQm1FdyP8CiDivhpSpKGK175Eu1jnolNPv5AIsKxBxJEUIj2gwAmCgS2XEECM3TMHxfYtPYmdCY97nDlHWYd57GroRmiGthd5UTdp3GjoTufqBP8KXNvqPP0Y2QbgfmS7Wl8ghvQ0/gU5tQFuF+aLSX9lIIzfvQXDnd+fcbbkK3bzOtWWvu/YaXUKIjLyZu95+TkOLF0bDEu6XyEVKMOCi2FnyIXIRUjVOirA0XIg8hHRqlVjyIHISKzmAqnllsJ1TyG8zE8S22EloqmKL12rYeGm2ErmrnYFmTtqO/hdBUy5Jhad1iwLUQqmSL1ukOIVTHm2hSs6fRSBgOPXZONfqLTYQKH4RFNR6LDYSu2udEXtuGDbWe0BzHR/jUvn5DrSU0wrGs0VSbsDaOWks4HzYu2lXOvCuhOWRkW0SHunVaQ2gMcbkEU1CzTmsIo6HHK6CaC0Y2oTn0aIXEXqdswvGt0VQBP+EY12gq5jplEerqu0xsrVnpDCzC1dAjFdaKj1ByHpdMHRgxjSqhoQ09ToC06qFYJaR9ZTrJ0LHqR1UI9XGeFJmCymZTIZwPPUagKhZ4mXAmP51SruxyPmqZ0Bp6hGCVt9MyoYyE7X51aCYc/xRWJrFEqHoMn0eTJkJv6NGhyGsgHPdZmCmoJ3THv8+k2rm1hON1Kopa1RHqYz/tM9l6DaE/rhBpvRyfTTgds9tUlDZlEnrq5T2J6uwxCccaf2IpYhHqw6Xg4+ukMwhdQN7MbiJDP+IDWrgMQvHcrsOcTGWILLsW9f+KVgkB0YsHkaSZ+CXtbzTjRWiKH4YnWYS6OKHzusR4EQI8Q1tW7w5IxtnLS3wRAo57R7Rwrk2QbBetTDiFZCDeL1IAPUgyyCIzazJCHfBjjakQAEBYwCHbajJCoEHz49eNU1gx0A/IPp2MEOw47XBXKjwklmW7ZYRtrYA4FKMt1ekFIZxyLRLO4L+YWPQRTkMSc4mSeD0rECKl459q83b4NY2Q0s1ogTDG+dGvBXipug9xY7SouECIF6FZg3bVWYjnhtsFQsREy2vXMtacrDViuuA2T2ji1lTEYh1XkPsYLMwcIUWOsh0FOszNfNwxZDfeT8IbwnFY1Mnt1q5r5qGXBVxvOUJYHNFhpaf8hF2MHDdm/R8fYEtLyxHCPoC9t2TtVDZ3Gwt9yTKyt0sPdjIGOULYL2mJmcU6UI+czbqozZrA+DIFrq39LyEwPSFdDYbLOsgWcTvfLGAl8GzddAHACJ9JC38JLzBP7Lnepz7LGDm02XE+i+/bf+5TMMLJ5UUIcqZ/Awa6xopw/mnYcaYeKw3yR8sseBjh1nsRAosoXyERYgWMeXSWdbbqhXVh+R38phrACHf0RRjBUtl+CZOlyjrWbGY7Mj1iLZ27nztIYYTH6EUIvDjU8uO+hKyr8ri6q1qse5JD8RQFntP+i3AJM2kKhMm39WD8mXNY9I7NmPUfoZUal8IIr8sXIbAKr0iY7P9zxvK7rvO7qs86WyZWeTED72xDWYQ1v7jZZ+b4hZlIvqz+DBohMAeDQUhmzGbQ66Xl0RVrg/kOWJY6kHAlk5CQOdMWY8ux2UXnahPW2NMs3f0ad1JxwsQnCnmm8XirtXqUJyRT60/r3z41OCDqE6aGS3P1xqQx3jEGwoSxKRYbNsdz0Ajxz8OCLjY7Rnitlg7gEso88UuKzlXGopEjmRDVLmVKX5XNtHV99TUWYc4uxfQt6uQ98v/IYsUViUPzLfD8wwbNcr2/TxUbWwZhzj9E8/GbZdKnkWNbvPeMaD4+UpymXTM9FX/EHy1OgxJrkyG0WBtCvFRFwly8FBzzVpMwF/MG3luoSpi/t4D9kqqE+bsn2P2hooSF+0PYHbCihIU7YNg9vqKEhXt8WC6GooSFXAxYPo2ihMV8GlBOlKKEcYEQlNemKGExrw2Um6gooVEgBOWXqkn4TYqEkK1GTcJyjjAkz1tNwnKeNyRXX03Ccq4+pN5CScJKvQXkx6TVPRFASWSlZgaS/t/ajllUkEbU1bonQO3aVyzlIV8yBVhajNo1SPekDX7FTCofkBLNqD8EGm46egVp451Vqxg1pKA64ERn5CJgWM4+sw74rWq5H6xa7vevx/+Angrv3xfj/XubfEB/mvfvMfQBfaLev9fXB/Rre/+eex/QN5GMt0typpbel28wiW39S9+/B+379xH+gF7Q79/P+wN6sr9/X/0xuxicbyN8wPsWo41Jcb9RMlYvqsM7M8Qc04tkmTZd3goa5Trt9N4TMcYXAD91e7NrfO+ubTu+u/YBb+d9wPuH7/+G5Qe8Q/oBb8kScht66Jy6NUE0Er7/m84f8C73B7ytDkpL6kWtCVlthMRS+3b/zG430YUQWn4pV4umc4KXkFD0loNourYD8hBiNaiVIA5ALkJVZ7HRlOlGqOa3yPEN8hMSqt6OuuUD5CUklmrn4qT1mOhISFy1rJs1d+Y1NyExVbJR7/xNtfkJVfI0mr0JcUJyU8Ml3jT6gyBCQlUIbPBuokKExN0PPY2brg3ROxISMxw2juqEXRv3dyUkBqvtY286zHn7S4sTJtM43J1GIPDyggAhMaJhPsYNd4NwKCF6j38+iUygMCEhUd9G3Fr02SxRQqKv+rx/O6yEn7ARJkzcDa2v7KmjxutI4BISg/azqwbMZtl9ECZLdS4/WdOew95YghESMpOcI3awxF50wSMkUt1/bkdeLiEhXiCjFGXH+TxGi1AI0zcAbFyL3LFXSBXiSITJpuNrePG4s+bjPOFGEAnThvrRAyOuujhFHmL5OyJhIt2lAWy1OgF10abvr3AJE+mmpYnuO4uHZeLiEQmEqaZ6xGyr36TrPtKltGaQQvhXBo3t7eLYdqlzPS62dizwihmv5BH+lUmXWrC3J9vd0cmzXp0EbGLvA+1GZb2X/L8kEz5lXDwa+cswXD0Vhks/ot5F3sTl1AvhoPpHOH69P+F/zs2eSqv29ygAAAAASUVORK5CYII="
                  alt="Mail"
                />
              </div>
            </label>
          </a>
   </nav>
</footer>
       

      </div>
    </>
  );
};

export default Footer;
