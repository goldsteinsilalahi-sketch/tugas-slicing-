document.addEventListener('DOMContentLoaded', () => {
    const duitSekarangEl = document.getElementById('duitSekarang');
    const tombolTopup = document.getElementById('tombolTopup');
    const popupTopup = document.querySelector('.popupTopup');
    const tombolNambah = document.getElementById('tombolNambah');
    const tombolNgurang = document.getElementById('tombolNgurang');

    const tobolGacha = document.querySelector('.tobolGacha');
    const roda = document.querySelector('.roda');
    const popupSpin = document.querySelector('.popupSpin');
    const tampilanWaifu = document.querySelector('.tampilanWaifu');
    const tombolAmbil = document.getElementById('tombolAmbil');
    const listHasil = document.getElementById('listHasil');

    const daftarWaifu = [
        { nama: 'Kokomi', gambar: 'doksli/kokomi.jpeg', rate: 1 },
        { nama: 'Aqua', gambar: 'doksli/aqua.jpg', rate: 8 }, 
        { nama: 'Asuna', gambar: 'doksli/Asuna.jpg', rate: 8 },
        { nama: 'Orihime', gambar: 'doksli/Orihime.jpg', rate: 8 },
        { nama: 'Chizuru', gambar: 'doksli/Chizuru.jpg', rate: 17.5 },
        { nama: 'Sakura', gambar: 'doksli/Sakura.jpg', rate: 17.5 },
        { nama: 'Hideri', gambar: 'doksli/Hideri.jpg', rate: 20 }, 
        { nama: 'Venti', gambar: 'doksli/Venti.jpg', rate: 20 }   
    ];

    let saldo = parseInt(duitSekarangEl.textContent) || 0;
    const biayaGacha = 160;
    let currentRotation = 0;
    let waifuDidapat = null;

    tombolTopup.addEventListener('click', () => {
        popupTopup.style.display = 'flex';
    });

    tombolNambah.addEventListener('click', () => {
        saldo += 5;
        duitSekarangEl.textContent = saldo;
        popupTopup.style.display = 'none';
    });

    tombolNgurang.addEventListener('click', () => {
        if (saldo >= 100) {
            saldo -= 100;
            duitSekarangEl.textContent = saldo;
            popupTopup.style.display = 'none';
        } else {
            alert("Bawang tidak cukup!");
        }
    });

    tobolGacha.addEventListener('click', () => {
        if (saldo < biayaGacha) {
            alert('Bawang tidak cukup! Silakan Topup terlebih dahulu.');
            return;
        }

        saldo -= biayaGacha;
        duitSekarangEl.textContent = saldo;
        tobolGacha.disabled = true;

        const totalRate = daftarWaifu.reduce((acc, curr) => acc + curr.rate, 0);
        let randomNum = Math.random() * totalRate;
        let selectedIndex = 0;

        for (let i = 0; i < daftarWaifu.length; i++) {
            if (randomNum < daftarWaifu[i].rate) {
                selectedIndex = i;
                break;
            }
            randomNum -= daftarWaifu[i].rate;
        }

        waifuDidapat = daftarWaifu[selectedIndex];

        const degPerItem = 360 / daftarWaifu.length;
        const targetDegree = (daftarWaifu.length - selectedIndex) * degPerItem - (degPerItem / 2);
        const putaranPenuh = 1800; 

        const currentBaseRotation = Math.ceil(currentRotation / 360) * 360;
        currentRotation = currentBaseRotation + putaranPenuh + targetDegree;

        roda.style.transition = 'transform 3s cubic-bezier(0.15, 0.99, 0.24, 0.99)';
        roda.style.transform = `rotate(${currentRotation}deg)`;

        setTimeout(() => {
            tampilanWaifu.innerHTML = `
                <img src="${waifuDidapat.gambar}" alt="${waifuDidapat.nama}" class="img-popup">
                <h3 style="margin-top: 10px; color: #FDD9E5;">${waifuDidapat.nama}</h3>
            `;
            popupSpin.style.display = 'flex';
            tobolGacha.disabled = false;
        }, 3000);
    });

    tombolAmbil.addEventListener('click', () => {
        if (waifuDidapat) {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${waifuDidapat.gambar}" alt="${waifuDidapat.nama}">
                <span>${waifuDidapat.nama}</span>
            `;
            listHasil.appendChild(li);
        }

        popupSpin.style.display = 'none';
    });
});
