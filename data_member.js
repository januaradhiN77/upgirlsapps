var urlParams = new URLSearchParams(window.location.search);
var memberId = urlParams.get('member');


if (memberId === 'nat') {
        document.getElementById('imgMember').src = 'memberimg/nat.jpg';
        document.getElementById('namaMember').innerHTML = 'Angeline Natasya';
        document.getElementById('namaPanggilan').innerHTML = 'Nat';
        document.getElementById('posisi').innerHTML = 'Tidak ada data';
        document.getElementById('birthday').innerHTML = '8 November 2002';
        document.getElementById('horoskop').innerHTML = 'Virgo';
        document.getElementById('tagIg').innerHTML = '@aangelinenatasya';
        document.getElementById('tagX').innerHTML = '@natasyangeline';
        document.getElementById('tagThreads').innerHTML = '@aangelinenatasya';
        document.getElementById('tagTiktok').innerHTML = '@aangelinenatasya';
        document.getElementById('tagFm').innerHTML = 'upgirlsnat';

        const linkIg = document.getElementById("linkIg");
        
        linkIg.addEventListener("click", () => {
                window.location.href = 'https://instagram.com/aangelinenatasya?igshid=OGQ5ZDc2ODk2ZA=='; // Use the URL directly
        });
        
        const linkX = document.getElementById("linkX");
        
        linkX.addEventListener("click", () => {
                window.location.href = 'https://x.com/natasyangeline?t=Cb-YNqEdWxlG36EDay1AUg&s=09'; // Use the URL directly
        });
        
        const linkThreads = document.getElementById("linkThreads");
        
        linkThreads.addEventListener("click", () => {
                window.location.href = 'https://www.threads.net/@aangelinenatasya'; // Use the URL directly
        });
        
        const linkTiktok = document.getElementById("linkTiktok");
        
        linkTiktok.addEventListener("click", () => {
                window.location.href = 'https://www.tiktok.com/@aangelinenatasya?_r=1&_d=e3baf39c8gkf0b&sec_uid=MS4wLjABAAAAS48RmgERMJbIDc_pSx0PninS9sQhA1B3jT7TcuYxcaqUBbHD3NJSFuB1Qi393W-r&share_author_id=61156195935223808&sharer_language=id&source=h5_t&u_code=e3baf6fea493il&timestamp=1701092655&user_id=7133175653222106113&sec_user_id=MS4wLjABAAAAyWVAKeH57-M5CLhwbELhuHitzqRV0F15BVLPyKCcqlNjDhfQukdma8UgoFw_nTVY&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7294969911674947333&share_link_id=bd22f78c-3e38-4734-8cf5-682e3bf9706c&share_app_id=1180&ugbiz_name=ACCOUNT&ug_btm=b6880%2Cb5836&social_share_type=5'; // Use the URL directly
        });
        
        const linkFm = document.getElementById("linkFm");
        
        linkFm.addEventListener("click", () => {
                window.location.href = 'https://www.fanmate.id/upgirlsnat'; // Use the URL directly
        });
}

else if (memberId === 'una') {
        document.getElementById('imgMember').src = 'memberimg/una.jpg';
        document.getElementById('namaMember').innerHTML = 'Tidak ada data';
        document.getElementById('namaPanggilan').innerHTML = 'Una';
        document.getElementById('posisi').innerHTML = 'Tidak ada data';
        document.getElementById('birthday').innerHTML = 'Tidak ada data';
        document.getElementById('horoskop').innerHTML = 'Tidam ada data';
        document.getElementById('tagIg').innerHTML = '@firdhauna';
        document.getElementById('tagX').innerHTML = '@firdhauna';
        document.getElementById('tagThreads').innerHTML = 'tidak ada akun';
        document.getElementById('tagTiktok').innerHTML = '@firdhauna';
        document.getElementById('tagFm').innerHTML = 'tidak ada fanmate';
        
        const linkIg = document.getElementById("linkIg");
        
        linkIg.addEventListener("click", () => {
                window.location.href = 'https://instagram.com/firdhauna?igshid=OGQ5ZDc2ODk2ZA=='; // Use the URL directly
        });
        
        const linkX = document.getElementById("linkX");
        
        linkX.addEventListener("click", () => {
                window.location.href = 'https://x.com/firdhauna?t=pl22aY5Fs82UgfL5CIGZHA&s=09'; // Use the URL directly
        });
        
        const linkThreads = document.getElementById("linkThreads");
        
        linkThreads.addEventListener("click", () => {
                window.location.href = '#'; // Use the URL directly
        });
        
        const linkTiktok = document.getElementById("linkTiktok");
        
        linkTiktok.addEventListener("click", () => {
                window.location.href = 'https://www.tiktok.com/@firdhauna?_t=8hiCAKKrLP7&_r=1'; // Use the URL directly
        });
        
        const linkFm = document.getElementById("linkFm");
        
        linkFm.addEventListener("click", () => {
                window.location.href = '#'; // Use the URL directly
        });
}

