import React from 'react'

type Props = {
  color: string,
}

const CodeMirrorIcon = ({ color }: Props): JSX.Element => {
  return (
    <svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M22.8437 4.15624C22.8437 4.15624 23.5234 5.60937 22.5625 7.21874C22.0781 8.01562 9.8203 10.625 5.03905 17.2656C2.10936 21.8516 -2.38283 35.1328 11.9687 43.9219C18.414 47.2422 21.1484 47.1406 21.1484 47.1406C21.1484 47.1406 16.8515 44.1172 19.5859 42.0625C22.3203 40.0078 26.3203 39.0391 27.3984 36.2031C28.664 37.1797 30.7187 39.2266 32.6719 39.0312C32.4765 37.7656 31.9922 37.2734 33.5469 37.0781C35.1015 36.8828 35.8906 36.8828 35.8906 36.8828C35.8906 36.8828 34.4297 35.7109 32.7656 35.6172C31.1015 35.5234 27.9844 32.2969 28.0781 30.9297C30.125 29.7578 32.7656 27.8047 34.3281 28.3906C35.8906 28.9766 37.4531 29.9531 37.7422 30.8281C37.7422 31.4141 37.4531 32.3906 38.7187 31.6094C39.9844 30.8281 39.6953 30.3437 40.1797 29.2656C40.664 28.1875 40.7656 28 39.6953 27.1172C38.625 26.2344 36.0859 24.1875 34.0312 24.7734C31.9765 25.3594 27.6875 27.0156 25.539 24.9687C26.414 23.0156 27.7812 19.8906 27.1015 17.7422C28.3672 16.7656 29.8359 15.6953 30.0312 13.9375C31.4922 13.7422 34.6172 12.8672 34.0312 11.3047C33.4453 9.74218 29.289 2.81249 22.9375 4.17968' />
      <path d='M43.1177 20.1094C44.188 17.2812 45.9458 12.4922 44.2895 12.2969C42.6333 12.1016 40.7739 16.5937 40.2895 17.7656C39.8052 18.9375 37.852 24.7969 38.9223 25.5781C39.9927 26.3594 43.1177 20.1094 43.1177 20.1094Z' />
      <path
        d='M34.0311 12.4922C34.3357 12.0156 34.5936 12.4297 33.2811 12.5234C31.9686 12.6172 30.3904 13.0234 30.1248 13.6016C29.6248 14.6719 29.4529 17.3203 27.5467 17.9063C27.4529 18.5859 27.5467 20.1484 30.2264 20.4453C32.9061 20.7422 33.0076 18.9844 34.5701 19.0313C36.1326 19.0781 35.9842 18.5 35.4451 18.0547C34.9061 17.6094 33.0545 14.6406 33.0545 13.6641C33.0545 12.6875 33.6873 13.0313 34.0311 12.4922ZM10.0545 41.9375C10.0545 41.9375 9.22637 39.7422 11.6639 38.5703C14.1014 37.3984 16.2967 38.3281 16.742 39.1563C17.1873 39.9844 16.0154 43.3047 11.8123 43.3516C10.7889 42.5234 10.0545 41.9375 10.0545 41.9375Z'
        fill='#DA687D'
      />
      <g opacity='0.7'>
        <path
          d='M43.4297 13.8867C43.4688 14.0332 43.4492 14.1895 43.4492 14.3555C43.4492 14.5117 43.4395 14.6777 43.3906 14.834C43.4004 14.8633 43.3906 14.9121 43.3906 14.9512C43.3516 15 43.3809 15.0391 43.3711 15.0781C43.4297 15.1367 43.5176 15.2051 43.4785 15.2832C43.459 15.332 43.4004 15.3516 43.3418 15.3711C43.3125 15.5078 43.2734 15.6641 43.2441 15.8203C43.2441 15.8594 43.2441 15.918 43.2344 15.957C43.2051 16.0547 43.1758 16.1426 43.1465 16.25C43.127 16.3379 43.1465 16.5039 43.0488 16.5234C43.0098 16.6211 42.9902 16.6992 42.9414 16.7969C42.9219 16.8066 42.9023 16.7871 42.8828 16.7969C42.8535 16.8262 42.8633 16.875 42.834 16.9043C42.8145 16.9238 42.7852 16.9141 42.7754 16.9336C42.7461 16.9824 42.7559 17.0508 42.7266 17.1191C42.6824 17.1575 42.6459 17.2039 42.6191 17.2559C42.5703 17.3633 42.5605 17.5098 42.4727 17.5977C42.4531 17.6172 42.4043 17.627 42.375 17.6562C42.3555 17.6758 42.3359 17.7148 42.3164 17.7441C42.2871 17.7832 42.2578 17.8418 42.2285 17.8906C42.1309 18.0566 42.0039 18.252 41.9063 18.4375C41.8965 18.4668 41.8867 18.5156 41.877 18.5449C41.8477 18.623 41.7891 18.6914 41.7598 18.7695C41.7109 18.8867 41.6328 19.0918 41.5156 19.1992C41.5059 19.209 41.4766 19.2188 41.457 19.2383C41.4473 19.2578 41.4473 19.2871 41.4277 19.3164C41.4277 19.3262 41.3887 19.3262 41.3789 19.3457C41.3594 19.3652 41.3496 19.3848 41.3398 19.4043C41.3008 19.4336 41.2422 19.4531 41.2129 19.4922C41.1934 19.5215 41.1836 19.5605 41.1543 19.5996C41.125 19.6387 41.0859 19.668 41.0566 19.7168C40.9688 19.834 40.9297 19.9902 40.793 20.0391C40.7637 20.0488 40.7148 20.0488 40.6758 20.0586C40.6465 20.0293 40.6758 19.9805 40.666 19.9512C40.666 19.9316 40.6465 19.9219 40.6367 19.9023C40.627 19.8633 40.6074 19.7754 40.6074 19.7266C40.6074 19.6777 40.6367 19.6387 40.6367 19.5703C40.6367 19.5215 40.627 19.4531 40.627 19.3945C40.627 19.3652 40.627 19.3359 40.627 19.3066C40.627 19.2578 40.627 19.2285 40.627 19.1699C40.627 19.1016 40.627 19.0332 40.6172 18.9648C40.6465 18.7988 40.666 18.6719 40.7148 18.4863C40.7344 18.4082 40.7832 18.2617 40.8223 18.1641C40.9004 17.9883 40.9785 17.7832 41.0762 17.5879C41.1055 17.5293 41.1543 17.4805 41.1836 17.4121C41.1934 17.3828 41.2031 17.334 41.2129 17.2949C41.3691 16.9727 41.584 16.6895 41.75 16.3477C41.8867 16.0742 42.0234 15.8203 42.209 15.5176C42.2871 15.3809 42.3555 15.2344 42.4434 15.127C42.502 15.0488 42.5996 14.8926 42.668 14.7461C42.6875 14.6973 42.6875 14.6484 42.7656 14.6387C42.834 14.5508 42.8926 14.4434 42.9707 14.3652C42.9902 14.3457 43.0195 14.3359 43.0391 14.3262C43.0586 14.3066 43.0684 14.2773 43.0977 14.2578C43.1465 14.2188 43.2344 14.1797 43.293 14.1016C43.3027 14.082 43.3125 14.0625 43.332 14.043C43.3711 13.9941 43.4395 13.8672 43.5078 13.8477C43.5078 13.8477 43.5273 13.8477 43.5371 13.8477'
          fill='#DA687D'
        />
      </g>
      <g opacity='0.7'>
        <path
          d='M42.8051 15.8789C42.8637 16.0645 42.8735 16.2793 42.893 16.4844C42.893 16.6895 42.8832 16.9238 42.8247 17.1582C42.8247 17.1973 42.8149 17.2656 42.8149 17.3145C42.7661 17.3828 42.7954 17.4316 42.7758 17.4902C42.8442 17.5684 42.9321 17.6465 42.8832 17.7637C42.854 17.8418 42.7758 17.8613 42.7075 17.9004C42.6489 18.0859 42.5903 18.3105 42.5317 18.5156C42.5219 18.5742 42.5122 18.6426 42.4926 18.7012C42.4438 18.8281 42.3852 18.9551 42.3461 19.1016C42.3071 19.2188 42.3168 19.4336 42.1899 19.4531C42.1313 19.5801 42.102 19.6777 42.0336 19.8047C42.0043 19.8242 41.9848 19.7949 41.9555 19.8047C41.9262 19.8437 41.9164 19.9023 41.8872 19.9414C41.8676 19.9609 41.8383 19.9609 41.8188 19.9902C41.7797 20.0488 41.7895 20.1367 41.7504 20.2246C41.7092 20.262 41.6731 20.3047 41.643 20.3516L41.6332 20.3711C41.5747 20.5273 41.5551 20.7227 41.4575 20.8496C41.4282 20.8887 41.3793 20.8984 41.35 20.9375C41.3305 20.9668 41.311 21.0254 41.2817 21.0645C41.2524 21.123 41.2133 21.2012 41.184 21.2695C41.0864 21.5039 40.9399 21.7773 40.8422 22.0508C40.8325 22.0996 40.8227 22.1582 40.8129 22.207C40.7739 22.3145 40.7153 22.4219 40.686 22.5293C40.6274 22.6953 40.5493 22.9883 40.393 23.1445C40.3832 23.1641 40.3442 23.1836 40.3247 23.2031C40.3051 23.2324 40.3149 23.2715 40.2856 23.3105C40.2758 23.3203 40.2465 23.3301 40.227 23.3496C40.2075 23.3789 40.1977 23.4082 40.1782 23.4375C40.1293 23.4863 40.061 23.5156 40.0122 23.5742C39.9829 23.6133 39.9633 23.6719 39.9243 23.7207C39.8852 23.7695 39.8364 23.8281 39.7875 23.877L39.6118 24.1309C39.5629 24.209 39.4946 24.2773 39.4165 24.3066C39.3774 24.3262 39.3188 24.3164 39.27 24.3262C39.2407 24.2871 39.27 24.2285 39.27 24.1797C39.27 24.1602 39.2504 24.1309 39.2504 24.1113C39.2504 24.0527 39.2407 23.9453 39.2504 23.8867C39.2504 23.8281 39.2993 23.7793 39.3188 23.6914C39.3286 23.623 39.3188 23.5449 39.3188 23.4668C39.3188 23.4375 39.3286 23.3984 39.3286 23.3496C39.3286 23.291 39.3286 23.2617 39.3383 23.1836C39.3481 23.0957 39.3383 23.0078 39.3286 22.9199C39.3676 22.7148 39.3872 22.5488 39.4457 22.3047C39.4653 22.1973 39.5141 22.002 39.5629 21.875C39.602 21.748 39.6508 21.6211 39.6899 21.4844C39.7289 21.3477 39.7778 21.2109 39.8266 21.0742C39.8559 20.9863 39.9047 20.9082 39.9438 20.8105C39.9633 20.7617 39.9633 20.7031 39.9829 20.6445C40.0219 20.5273 40.0707 20.4004 40.1293 20.293C40.1833 20.1849 40.2387 20.0774 40.2954 19.9707L40.3832 19.7949C40.4125 19.7461 40.4418 19.6875 40.4711 19.6289C40.5328 19.5133 40.5915 19.3961 40.6469 19.2773C40.7432 19.0893 40.8441 18.9037 40.9497 18.7207C41.0649 18.5307 41.1821 18.3419 41.3012 18.1543C41.4086 17.9785 41.5161 17.7832 41.6235 17.6367C41.7016 17.5293 41.8286 17.334 41.9165 17.1387C41.9457 17.0703 41.9457 17.0117 42.0239 17.002C42.1118 16.8848 42.1801 16.748 42.2582 16.6406C42.2778 16.6211 42.3071 16.6016 42.3364 16.5723C42.3559 16.543 42.3754 16.5039 42.395 16.4746C42.4438 16.416 42.5512 16.3574 42.6098 16.2305C42.6196 16.2012 42.6196 16.1719 42.6391 16.1328C42.6684 16.0547 42.7368 15.8691 42.8051 15.8301C42.8051 15.8301 42.8247 15.8301 42.8344 15.8301'
          fill='#DA687D'
        />
      </g>
      <path
        d='M40.6879 18.0625C40.6879 18.0625 39.9067 21.0547 40.2348 23.5313L40.6879 18.0625ZM41.6098 16.0391C41.5551 15.8359 41.1645 21.8437 41.2817 22.0547C41.391 22.2578 41.977 17.3125 41.6098 16.0391Z'
        fill=''
      />
      <path
        d='M22.9686 4.52344C22.9686 4.52344 23.4217 7.11719 19.1951 8.48437C14.9686 9.85156 9.13263 11.0156 4.83575 16.1641C0.53888 21.3047 -0.24237 29.8281 2.68732 35.4297C5.617 41.0234 12.7733 47.9922 25.6639 47.9922C38.5545 47.9922 48.7967 38.1016 48.7967 31.2656C48.7967 27.6875 46.8358 28.4844 46.1561 31.8359C45.5467 34.8672 39.867 46.1797 25.6092 46.1797C11.3514 46.1797 4.06232 37.5234 3.14825 30.1016C2.242 22.6797 4.3045 16.2891 11.7967 12.4453C19.2811 8.60938 24.0311 10.1406 22.992 4.53906'
        fill={color}
      />
      <path
        d='M19.4141 24.5703C19.4141 24.5703 18.5703 28.4766 14.4688 30.3594C10.3672 32.2422 8.60938 33.2891 8.02344 36.5391C9.58594 33.9375 14.1406 33.4141 16.6797 30.875C19.2188 28.3359 19.4141 24.5625 19.4141 24.5625M20.5156 15.5156C20.5156 15.5156 24.0313 20.0703 28.1953 17.8594C32.3594 15.6484 30.2109 10.5078 30.1484 10.1797C30.0859 9.85938 30.6016 15.9063 27.4844 16.9453C24.3594 17.9844 20.5234 15.5156 20.5234 15.5156M11.3438 42.7344C11.3438 42.7344 13.5547 42.8594 15.1797 41.0469C16.8047 39.2266 15.8906 36.3594 18.5625 35.3203C21.2266 34.2813 23.0547 34.9297 23.0547 34.9297C23.0547 34.9297 18.3047 35.5781 17.9141 38.3125C17.5234 41.0469 16.875 42.2813 15.8359 43.125C14.7969 43.9688 13.4297 44.1016 13.4297 44.1016L11.3516 42.7344H11.3438Z'
        fill={color}
      />
      <path
        d='M21.3828 28.5625C21.3828 28.5625 25.3359 27.9062 27.1406 23.875C28.6172 20.5781 27.625 17.7266 27.625 17.7266L25.625 18.0156C25.625 18.0156 26.4531 20.4062 25.8203 22.5547C25.1875 24.7031 23.7266 27.1875 21.3828 28.5547M42.6797 19.4141C41.2734 22.9375 39.1875 25.4687 38.9453 25.3359C38.5078 25.0937 38.9141 22.0156 40.3203 18.4844C41.7266 14.9609 43.4844 12.2734 44.1328 12.5312C44.7813 12.7812 44.0859 15.8828 42.6797 19.4141ZM44.7266 12.3359C43.125 11.4687 41.1484 14.7187 39.5312 18.5156C37.9141 22.3125 37.7266 25.3672 38.9766 25.9141C40.6406 26.6406 42.2109 23.7422 43.8281 19.9453C45.4453 16.1484 46.1719 13.1094 44.7266 12.3281'
        fill={color}
      />
      <path
        d='M15.5781 31.4766C15.5781 31.4766 16.5859 34.5 21.6328 33.8828C26.3828 33.2969 28.4219 31.4688 31.3281 29.6563C33.4063 28.3594 33.2812 28.9453 33.5391 29.0078C33.7969 29.0703 34.9687 29.7891 36.2031 29.6563C36.2656 30.3047 35.625 29.7813 35.3594 30.3672C35.2344 30.7578 36.3437 32.5938 37.9609 32.3203C40.625 31.8672 39.875 30.7578 40.3984 29.5234C40.9141 28.2891 41.2734 27.6406 38.6797 25.8828C36.6641 24.0625 35.5547 24.5234 34.5781 24.5234C33.6016 24.5234 31.0625 25.8828 29.3047 25.5625C27.5469 25.2422 26.4453 24.5859 26.4453 24.5859L25.2813 25.8828C25.2813 25.8828 27.4219 27.5078 29.8984 26.9219C32.3672 26.3359 34.1953 24.4531 36.3438 25.4297C38.4922 26.4063 38.9063 27.0547 39.5625 27.5391C40.3047 28.0859 40.375 28.6719 39.8516 29.1953C39.3359 29.7109 39.8516 30.1016 39.5313 30.6875C39.2109 31.2734 37.5781 31.5313 37.5781 31.5313C37.5781 31.5313 39.3594 29.2422 37.1875 29.0625C35.625 28.9375 34.6484 26.8516 32.4375 27.9609C29.2656 29.5469 24.7578 32.2578 21.6328 32.5781C18.5937 32.8906 17.4688 31.9297 16.6875 30.1094C15.7813 30.8906 15.5859 31.4766 15.5859 31.4766'
        fill={color}
      />
      <path
        d='M26.7736 32.125C26.7736 32.125 28.9845 33.2969 28.3361 35.8359C27.6876 38.375 24.7579 40.1328 22.8673 40.9766C20.9845 41.8203 19.5782 42.9375 20.9845 43.6406C22.1564 44.2266 22.8048 42.7344 24.5001 42.4687C26.1876 42.2109 27.6876 42.8594 27.8204 43.8359C27.1095 43.4453 26.5861 43.4453 26.5861 43.4453C26.5861 43.4453 27.172 43.8359 27.2345 44.4844C27.297 45.1328 27.172 44.8047 26.7814 44.8047C25.8048 44.8047 25.6798 43.9609 24.8282 44.0937C22.6798 44.2891 22.5548 45.1953 21.3829 45.3281C20.2111 45.4531 18.2579 44.8125 18.5236 43.3125C18.7814 41.8203 20.797 40.7734 22.6876 39.9922C24.5704 39.2109 27.4376 36.7422 27.047 34.5234C26.6564 32.3125 24.9689 32.7656 24.9689 32.7656L26.7892 32.1172L26.7736 32.125ZM32.3204 13.6953C32.3204 13.6953 33.2423 14.1562 33.8282 16.5C34.2189 17.3437 34.7345 18.0234 35.1954 18.2187C35.6486 18.4141 35.0001 18.6094 34.6798 18.5391C34.3595 18.4766 33.672 18.1875 33.2189 18.5703C32.7657 18.9531 31.6564 20 30.0939 19.7422C28.5314 19.4844 27.2032 18.4922 27.2032 18.4922C27.2032 18.4922 27.7892 21.0781 31.2657 20.9141C33.6798 20.8047 33.1486 19.5469 34.7814 19.2891C36.4064 19.0312 36.2345 18.2109 35.8829 17.5312C35.3361 16.4609 33.6095 16.2031 33.4142 13.0625C33.2189 12.7422 32.0001 13.1016 32.3282 13.6875M37.8907 30.0234C38.0314 30.1641 36.7423 33.0937 36.7423 33.0937C36.7423 33.0937 36.4845 33.8047 35.7892 33.5547C35.0782 33.2969 35.2657 32.7812 35.2657 32.7812L36.922 29.7734C36.922 29.7734 37.8282 29.9531 37.8986 30.0234M39.7267 25.8594L39.4064 26.8359L38.3439 26.0234L38.6251 25.4062L39.7267 25.8594Z'
        fill={color}
      />
      <path
        d='M27.8125 31.5391C27.6172 32.25 30.0859 36.4219 31.7812 36.1563C33.4687 35.8984 33.7266 36.4141 33.2109 36.7422C32.6953 37.0625 31.7812 37.1953 31.9141 37.6484C32.0391 38.1016 32.3984 38.5547 31.5625 38.4297C30.7187 38.3047 28.9922 37.3906 27.9531 35.6328C27.6328 36.6719 27.5 37 27.5 37C27.5 37 30.8203 40.4453 34.2031 39.0156C33.6172 38.5625 31.9922 38.6953 33.3594 37.9141C34.7266 37.1328 35.7656 36.875 36.4141 38.1094C36.7344 38.0469 36.7344 35.1797 32.4453 35.375C30.9531 35.1797 28.9297 32.25 28.9297 30.7578C28.5391 31.1484 28.0234 30.8203 27.8281 31.5391M41.0625 17.1406C41.0625 17.1406 40.2109 19.7031 40.5703 21.8281L41.0625 17.1406ZM41.9375 15.625C41.8984 15.4688 41.5469 20.0938 41.625 20.25C41.7031 20.4063 42.1953 16.6094 41.9375 15.625ZM30.5625 13.0625C30.5625 13.0625 34.2344 12.7422 33.5859 11.2734C31.625 6.85938 27.8906 4.28126 20.9922 4.53907C24.8984 2.97657 28.2187 3.17188 31.4062 5.90626C33 7.27344 33.7344 8.93751 34.3047 10.2109C35.2109 12.2422 34.9453 12.4297 33.9453 13C32.7187 13.6875 30.6094 13.25 30.5625 13.0625Z'
        fill={color}
      />
      <path
        d='M30.9215 13.6094C30.9215 13.6094 31.9293 14.3047 32.7262 13.7344C33.0856 13.3594 33.3278 13.1563 32.3043 13.2031L31.0465 13.1563C30.1793 12.9844 30.1949 13.2422 30.9293 13.6094H30.9215Z'
        fill={color}
      />
    </svg>
  )
}

export default CodeMirrorIcon
