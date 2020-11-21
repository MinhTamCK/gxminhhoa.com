import React from 'react'
// import Image from 'next/image'

const Home = () => (
  <div>
    <img
      src="/images/gx_minh_hoa.jpg"
      alt="gx minh hoa"
      width="50%"
      height="auto"
      layout="responsive"/>
    <h1>
      Giáo xứ Minh Hòa - Giáo hạt An Bình - Giáo phận Xuân Lộc
    </h1>
    <p>Địa chỉ: Ấp 1, xã Lộ 25, huyện Thống Nhất, tỉnh Đồng Nai</p>
    <p>Giờ lễ:</p>
    <p>Chúa nhật     :  4:30   -   7:30   -   17:00</p>
    <p>Ngày thường : 4:30   -   17:00</p>

    <style jsx>
      {
        `:global(html, body) {
          margin: 0;
          padding: 0;
          height: 100%;
        }

        :global(body) {
          font-size: calc(10px + 1vmin);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
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
         `
      }</style>
  </div>
)

export default Home
