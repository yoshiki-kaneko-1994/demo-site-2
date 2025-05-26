"use strict";
// ▼ form start ▼
{
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const tel = form.querySelector('#tel').value.trim();
    const select = form.querySelector('#select').value;

    if (name && email && tel && select) {
      const result = confirm('送信しますか？');
      if (result) {
        alert('送信されました！');
        form.submit();
      } 
    } else {
      alert('必須項目を入力してください。');
    }
  });
}
// ▲ form end ▲
