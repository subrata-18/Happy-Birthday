(function(){
        const btn = document.querySelector('.btn button');
        const area = document.querySelector('.surprise-area');

        if (!btn || !area) return;

        btn.addEventListener('click', () => {
            // brief button pop
            btn.classList.add('pop');
            setTimeout(() => btn.classList.remove('pop'), 260);

            // create message
            const msg = document.createElement('div');
            msg.className = 'surprise-msg';
            msg.textContent = 'Surprise!';
            area.appendChild(msg);

            // remove after 1200ms
            setTimeout(() => {
                msg.classList.add('hide');
                setTimeout(() => msg.remove(), 220);
            }, 1200);
        });
    })();

// function goToPage2() {
//       // Redirect to page2.html
//     //   window.location.href = "2nd page/page2.html";
//     }