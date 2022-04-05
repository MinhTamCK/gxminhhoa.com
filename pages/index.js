import React from "react";
import Head from "next/head";
import Script from "next/script";

const TITLE = "Giáo xứ Minh Hòa";

const Home = () => (
  <div>
    <Head>
      <title>{TITLE}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={TITLE} key="title" />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5DW92Q9EXJ"
      ></script>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-5DW92Q9EXJ');
          `,
        }}
      />
    </Head>
    <img
      src="/images/gx_minh_hoa.jpg"
      alt="gx minh hoa"
      width="50%"
      height="auto"
      layout="responsive"
    />
    <h1>{TITLE} - Giáo hạt An Bình - Giáo phận Xuân Lộc</h1>
    <p>Địa chỉ: Ấp 1, xã Lộ 25, huyện Thống Nhất, tỉnh Đồng Nai</p>
    <p>Giờ lễ:</p>
    <p>Chúa nhật : 4:30 - 7:30 - 17:00</p>
    <p>Ngày thường : 4:30 - 17:00</p>

    <address>
      Liên hệ: <a href="mailto:minhtamck4@gmail.com">Tâm Nguyễn</a>
    </address>
    <style jsx>
      {`
        :global(html, body) {
          margin: 0;
          padding: 0;
          height: 100%;
        }

        :global(body) {
          font-size: calc(10px + 1vmin);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: #282c34;
          color: white;
        }

        a {
          color: pink;
          text-decoration: none;
        }

        .content {
          padding: 0 32px;
        }
      `}
    </style>
  </div>
);

export default Home;
