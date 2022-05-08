import {
  brr, grreng, gru, grush,
} from './keys.js';

const body = document.querySelector('body');

function textArea() {
  const textarea = `<h1>Virtual keyboard for Windows</h1>
	<h2>To change language press SHIFT + ALT</h2>
	<textarea id="story" name="story" class="textarea"
	rows="5" cols="33">
</textarea>
<div class='keyboard'><div class='cont'></div></div>`;

  body.insertAdjacentHTML('afterbegin', textarea);
}
textArea();

const div = document.querySelector('.cont');

function renderCards(brr) {
  brr.forEach((key, index) => {
    const but = `<div class='bkey' id=${index}>${key.key}</div>`;
    div.insertAdjacentHTML('beforeend', but);
  });
}

renderCards(brr);

const keys = document.querySelectorAll('.bkey');

const input = document.querySelector('textarea');

for (let i = 0; i < keys.length; i++) {
  brr.forEach((key) => {
    keys[i].setAttribute('data', key.code);
    i++;
  });
}

const b = document.querySelectorAll('.bkey');

let count = 1;

let c = 1;

document.addEventListener('keydown', (event) => {
  for (let i = 0; i < b.length; i++) {
    if (event.code === b[i].getAttribute('data')) {
      b[i].classList.add('active');
      if (event.code === 'NumpadSubtract') document.getElementById('11').classList.add('active');
      if (event.code !== 'ControlLeft' && event.code !== 'AltLeft' && event.code !== 'MetaLeft'
				&& event.code !== 'ShiftLeft' && event.code !== 'Enter' && event.code !== 'CapsLock' && event.code !== 'NumpadDecimal'
				&& event.code !== 'Tab' && event.code !== 'Backspace') { input.value += b[i].textContent.slice(0, 0); }
      input.focus();
    }

    if (event.code === 'Tab') input.value += ' ';

    if (event.code === 'ShiftLeft') {
      if (count % 2 == 0) {
        for (let i = 0; i < grush.length; i++) {
          b[i].textContent = grush[i];
        }
        document.getElementById('42').classList.add('active');
      } else {
        for (let i = 0; i < grreng.length; i++) {
          b[i].textContent = grreng[i];
        }
      }
      document.getElementById('42').classList.add('active');
    }
  }
});

window.addEventListener('keyup', (event) => {
  for (let i = 0; i < b.length; i++) {
    if (event.code === b[i].getAttribute('data')) {
      b[i].classList.remove('active');
    }

    if (event.code === 'CapsLock') {
      c++;
      if (c % 2 == 0 && count % 2 !== 0) {
        for (let i = 0; i < grreng.length; i++) {
          b[i].textContent = grreng[i];
        }
        document.getElementById('29').classList.add('active');
      }
      if (c % 2 !== 0 && count % 2 !== 0) {
        brr.forEach((el) => {
          b[i].textContent = el.key;
          i++;
        });

        document.getElementById('29').classList.remove('active');
      }

      if (c % 2 !== 0 && count % 2 == 0) {
        for (let i = 0; i < gru.length; i++) {
          b[i].textContent = gru[i];
        }

        document.getElementById('29').classList.add('active');
      }
      if (c % 2 == 0 && count % 2 == 0) {
        for (let i = 0; i < grush.length; i++) {
          b[i].textContent = grush[i];
        }

        document.getElementById('29').classList.remove('active');
      }

      return c / 64;
    }

    if (event.code === 'AltLeft') {
      count++;

      document.getElementById('57').classList.remove('active');
      document.getElementById('59').classList.remove('active');
      return count / 64;
    }

    if (event.code === 'ShiftLeft') {
      if (count % 2 == 0) {
        for (let i = 0; i < gru.length; i++) {
          b[i].textContent = gru[i];
        }
      } else {
        brr.forEach((el) => {
          b[i].textContent = el.key;
          i++;
        });
      }

      document.getElementById('42').classList.remove('active');
      document.getElementById('54').classList.remove('active');

      document.addEventListener('keyup', (event) => {
        if (event.code === 'AltLeft') {
          if (count % 2 !== 0) {
            for (let i = 0; i < grreng.length; i++) {
              b[i].textContent = gru[i];
            }
          }

          if (count % 2 == 0) {
            for (let i = 0; i < brr.length; i++) {
              b[i].textContent = brr[i].key;
            }
          }
        }
      });
    }
  }
});

b.forEach((el) => {
  el.onclick = function () {
    b.forEach((el) => {
      el.classList.remove('active');
    });

    this.classList.add('active');
    setTimeout(this.classList.remove('active'), 1000);

    input.value += el.textContent;
  };
});
