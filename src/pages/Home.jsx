import React from 'react'
import Banner from '../components/Banner'
import NavBar from '../components/NavBar'
import TextParagraph from '../components/TextParagraph'
import {LayoutPict, PartnerPict, LogoAeg, LogoPk, LogoSr,Thumbnail1,Thumbnail2} from "../assets"
import TextRed from '../components/TextRed'

const Home = () => {
  return (
<>
      <NavBar />
      <Banner />
      <div class="bg-white w-full h-screen">
          <div class='container flex mx-auto item-center px-6'>
              <div id="news">
              <h1 class="text-center text-2xl font-bold font-serif my-10"> NEWS </h1>
              <TextParagraph text={'Jakarta, Indonesia (March 29, 2022) - Justin Bieber announced new dates for his much-anticipated Justice World Tour, including Jakarta on November 2nd and 3rd, 2022 at Stadion Madya, Gelora Bung Karno. Kicking off on October 22nd, Bieber will hit Kuala Lumpur, Jakarta, Nagoya, Osaka and Tokyo. The entire world tour spans more than 100 dates throughout 2022 and 2023 in North America, South America, Europe, the UK, Australia, New Zealand, South Africa, Asia and the Middle East, with more shows to be announced in Asia very soon.'}/>
              <TextParagraph text={'AEG Presents Asia, PK Entertainment and Sound Rhythm are thrilled to announce that due to overwhelming demand, tickets for Justin Bieber’s much-anticipated Justice World Tour in Jakarta this November 3rd, 2022 have sold out. To keep up with fans demand, PK Entertainment is pleased to announce an additional date in Jakarta on Wednesday, November 2nd, 2022. Tickets will go on sale at 10.00 a.m. (GMT+7) on April 2, 2022 exclusively at www.justinbieberinjakarta.com and Blibli. Ticket purchases can only be made using BCA credit/debit cards, or by transfer to BCA virtual account.'}/>
              <TextParagraph text={'The new dates come on the heels of his recently announced international shows, starting in May 2022 in Mexico and will then continue on to Scandinavia for festival shows in August; South America, South Africa and the Middle East in September & October, and then over to Asia, Australia and New Zealand in October, November & December before moving to the UK and Europe in early 2023. Each evening promises to be a celebration for both Justin and his fans, who have been looking forward to these new shows since the pandemic sidelined the previously announced 2020 dates.'} />
              <TextParagraph text={'The ‘Justice World Tour,’ promoted by AEG Presents, is Justin’s first global outing since 2016/2017’s ‘Purpose World Tour’. Described by The Times of London as “mesmerizing”, Bieber played to 2.7 million fans over the course of his 2016-2017 run, with the finale seen by 65,000 fans at London’s British Summer Time Hyde Park festival.'}/>
              <TextParagraph text={'On New Year’s Eve 2020, Justin livestreamed his first full performance in 3 years from Los Angeles, electrifying and reconnecting with fans around the world.'}/>
              <TextParagraph text={'“We’ve been working hard to create the best show we’ve ever done, and we can’t wait to share it with fans around the world. I’ll see you soon,” said Bieber.'}/>
              <TextParagraph text={'The ‘Justice World Tour’ is named after Justin’s latest smash hit album ‘Justice’. Released in April 2021, it debuted as the most streamed album in 117 countries. The album and its tracks have taken the already global pop phenomenon to new heights.'}/>
              <TextParagraph text={"‘Justice' has amassed nearly 9 billion streams worldwide, arriving on the back of huge international hits ‘Anyone’, ‘Lonely’ and ‘Holy’, which had already gathered 2 billion streams prior to the album’s release. Another breakout smash hit from the album immediately followed, with ‘Peaches’ racking up over 2.5 billion streams so far. The Kid LAROI duet ‘Stay’, was released in July this year and became the fastest song ever to hit 1 billion streams on Spotify."}/>
              <TextParagraph text={'In an unprecedented career that started when he was 13 years old, Bieber has released 6 studio albums and holds 32 Guinness World Records, 21 Billboard Music Awards, 2 BRIT Awards, 18 American Music Awards and 21 MTV Europe Music Awards. He has sold over 80 million albums and last year broke Elvis Presley’s record as the youngest solo artist to have 8 albums reach Number 1 on the Billboard 200 charts. In August, he broke the all-time record for monthly listeners on Spotify with over 83 million.'}/>
              <TextParagraph text={'Recently named Artist Of The Year at the MTV Video Music Awards and nominated for a field-leading 8 MTV EMA Awards, Bieber remains the Number 1 artist on both YouTube and Spotify worldwide, cementing his place as one of the biggest pop stars of the 21st century.'}/>
              </div> 
          </div>

      <h1 class="text-center text-2xl font-bold font-serif my-5">Video</h1>

      <div class="container px-10 py-16 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={Thumbnail1} />
        </div>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={Thumbnail2}/>
        </div>
    </div>
    </div>
  </div>
 


      <div class='container flex mx-auto item-center px-6'>
      <div id="tnc">
            <h1 class="text-center text-2xl font-bold font-serif my-5"> Term & Condition </h1>
            <h2 class="font-bold font-serif"> General Terms & Conditions  </h2>
            <h2 class="font-bold font-serif"> Syarat & Ketentuan Umum  </h2>
            <ol class="list-decimal">
              <li>Tickets can only be purchased through justinbieberinjakarta.com and Blibli. Tickets are only for admission to the Justin Bieber Justice World Tour 2022 Jakarta concert. Tickets purchased for the November 2nd, 2022 show show can only be used on November 2nd, 2022 and tickets purchased for the November 3rd, 2022 show can only be used on November 3rd, 2022. </li>
              <TextRed text={'Tiket hanya dijual melalui justinbieberinjakarta.com dan Blibli. Tiket dapat digunakan untuk masuk ke acara konser Justin Bieber Justice World Tour 2022 Jakarta. Tiket yang dibeli untuk tanggal 2 November 2022 hanya berlaku pada tanggal 2 November 2022 dan tiket yang dibeli untuk tanggal 3 November 2022 hanya berlaku pada tanggal 3 November 2022'}/>
              <li>Your ticket purchase constitutes a personal license to attend the Justin Bieber Justice World Tour 2022 Jakarta concert. By purchasing a ticket, you agree to your personal data collection and usage. </li>
              <TextRed text={'Dengan membeli tiket ini, Anda telah menyetujui pengumpulan, penyimpanan dan penggunaan data pribadi Anda untuk keperluan konser Justin Bieber Justice World Tour 2022 Jakarta.'}/>
              <li>There is a ticket limit of 4 per transaction or VIP will be limited to 4 packages per transaction.</li>
              <TextRed text={'Setiap transaksi berlaku maksimal 4 tiket atau maksimal 4 paket VIP'}/>
              <li>All categories are numbered seated. The seat number will be automatically assigned to you based on the best seat available (based on a first come, first served basis). </li>
              <TextRed text={'Semua kategori diberi nomor duduk. Nomor kursi akan diberikan kepada Anda secara otomatis berdasarkan kursi terbaik yang tersedia'}/>
              <li>Ticket price excludes Government Tax 15% & Admin Fee 5%. </li>
              <TextRed text={'Harga tiket tidak termasuk Pajak 15% & Admin Fee 5%'}/>
              <li>Tickets will be personalized and will have the name of the attendees printed on them. The name registered to the ticket(s) cannot be changed. Please ensure that you enter your full name and ID card number as per your government-issued ID card with a valid photo (any national ID card/ KTP that links to PeduliLindungi mobile application) correctly when submitting your information for your e-ticket. E-ticket will be sent automatically to the purchaser's registered email address close to the event date. </li>
              <TextRed text={'Setiap tiket akan dipersonalisasikan dengan terteranya nama pengunjung di tiket. Nama yang sudah diregistrasikan di tiket tidak dapat diubah. Mohon pastikan bahwa nama lengkap dan nomor kartu identitas Anda sesuai dengan kartu identitas yang dikeluarkan pemerintah dengan foto yang valid (kartu tanda penduduk apapun/ KTP yang tersambung pada aplikasi PeduliLindungi) dengan benar saat mengisi informasi Anda untuk e-ticket Anda. E-ticket akan dikirimkan ke alamat email pemesan yang terdaftar saat pembelian tiket mendekati hari acara.'}/>
              <li>Your ticket(s) are sold by the promoters directly to the consumer. Any tickets purchased by businesses or traders are in breach of the terms and conditions of ticket sale and may be invalid.Tickets purchased from third-party websites and unauthorized resellers (such as Viagogo, StubHub, etc.) are at the sole risk and responsibility of the ticket purchaser. </li>
              <li>Tickets cannot be used for commercial purposes, including but not limited to prizes, competition, contests or sweepstakes. Tickets sold or used in breach of this condition may be cancelled without a refund, with the bearer of the ticket being refused admission, no exceptions. </li>
              <TextRed text={'Tiket tidak bisa digunakan untuk keperluan komersial, termasuk untuk (dan tidak terbatas kepada) hadiah, kompetisi, kontes, atau undian. Tiket yang dijual atau digunakan apabila tidak sesuai dengan peraturan yang tertera dapat dibatalkan tanpa pengembalian dana dan pemegang tiket akan ditolak masuk ke dalam area konser, tanpa terkecuali.'}/>
              <li>All ticket sales are final. There are no refunds and no exchanges. </li>
              <TextRed text={'Semua penjualan tiket adalah final. Tidak ada pengembalian ataupun penukaran tiket.'}/>
              <li>In the event of a cancelled concert, tickets will be refunded in accordance with the provisions of the promoter. Please note that refund does not include ticketing admin fee, credit card convenience fee or any other personal costs (e.g. travel expenses, accommodation expenses, etc) </li>
              <TextRed text={'Jika terjadi pembatalan konser, maka uang tiket akan dikembalikan sesuai dengan ketentuan promotor. Biaya administrasi tiket, convenient fee yang dibebankan kepada pembeli dengan kartu kredit atau biaya pribadi (contoh biaya perjalanan, biaya akomodasi, dll) tidak akan dikembalikan.'}/>
              <li>The holder of this ticket grants its organizers and sponsors the right to use, in perpetuity, all or any part of the recording of any video or still footage made of the holder's appearance on any channel or magazine for broadcast in any and all media globally and for advertising, publicity and promotions relating hereto without any further approval of yours. </li>
              <TextRed text={'Pemegang tiket ini memberikan hak kepada penyelenggara dan para sponsor melakukan rekaman video baik sebagian atau semua, untuk kebutuhan penampilan saluran tv atau majalah untuk disiarkan di media apapun di seluruh dunia, untuk iklan, publisitas dan promosi yang berkaitan dengan konser tanpa persetujuan lebih lanjut dari Anda.'}/>
              <li>The following items are not permitted in the event and may be ejected with or without the owner from the venue: </li>
              <TextRed text={'Barang-barang berikut tidak diizinkan dalam acara dan akan dikeluarkan dengan atau tanpa pemilik dari tempat tersebut:'}/>
                <ol class="list-disc">
                  <li>Non-authorized professional recording equipment (professional cameras, video recording devices, and audio recording devices, including 'GoPro' style devices and tablets), for unauthorized people/journalist without accredited badge;  </li>
                  <TextRed text={'Alat perekam profesional (kamera profesional, alat perekam video dan alat perekam suara, termasuk perangkat sejenis GoPro dan tablet) yang tidak resmi/wartawan yang tidak sah tanpa ID khusus dari penyelenggara;'}/>
                  <li>Liquids, alcohol, cigarettes and banned substances including outside food and drink; </li>
                  <TextRed text={'Cairan, alkohol, segala jenis rokok, dan barang-barang terlarang lainnya termasuk makanan dan minuman;'}/>
                  <li>Pyrotechnic items or explosives including fireworks, candles, lighters; </li>
                  <TextRed text={'Benda pyroteknik atau eksplosif termasuk kembang api, lilin atau korek api;'}/>
                  <li>Flammable material including alcohol, gasoline, kerosene, pressurized cologne; </li>
                  <TextRed text={'Bahan mudah terbakar termasuk alkohol, bensin, minyak tanah, cologne.'}/>
                  <li>Dangerous or potentially hazardous objects, including but not limited to sports items, weapons, knives, guns, laser devices, iron bar, wooden bar, sharp object or material, helmets, metal/plastic knuckles, self-defense spray (tear, pepper-spray), stun guns or any electric shock devices; </li>
                  <TextRed text={'Benda berbahaya atau berpotensi berbahaya termasuk namun tidak terbatas pada item olahraga, senjata, pisau, senjata api, perangkat laser, bar besi, bilah kayu, benda atau bahan tajam, helm, keling besi/plastic, semprotan pertahan diri (gas air mata, semprotan merica), senjata kejut listrik atau perangkat sengatan listrik lainnya;'}/>
                  <li>Any suspicious casual objects which can be used as a weapon or projectile including tools, chemicals, suspicious powder, umbrellas, selfie sticks, and other poles or tripods. </li>
                  <TextRed text={'Benda-benda kasual yang mencurigakan yang bisa dijadikan senjata atau proyektil termasuk peralatan, bahan kimia, bubuk mencurigakan, payung, tongkat selfie dan jenis-jenis tiang atau tripod lainnya.'}/>
                </ol>
              <li>Children under the age of 14 must be accompanied by a parent or legal guardian and no children under the age of 6 are allowed to attend the event. </li>
              <TextRed text={'Anak-anak dibawah umur 14 tahun wajib didampingi oleh orang-tua atau wali dan anak-anak dibawah umur 6 tahun tidak diizinkan masuk.'}/>
              <li>The sponsors/bands/organizers/management are not responsible for, including but not limited to any injury or damage that may occur during or at the event. </li>
              <TextRed text={'Para sponsor/artist/penyelenggara tidak bertanggung jawab untuk, termasuk, tidak terbatas pada cedera atau kerusakan yang mungkin terjadi kepada pengunjung selama atau di dalam acara tersebut.'}/>
              <li>Organizers have the right to refuse admission to and/or evict ticket-holders who do not abide by the Terms and Conditions. </li>
              <TextRed text={'Penyelenggara memiliki hak untuk menolak masuk dan/atau mengeluarkan orang-orang yang tidak menaati syarat dan ketentuan acara.'}/>
              <li>Organizers have the right to change, add or modify all provisions mentioned in the Terms and Conditions without prior notice. </li>
              <TextRed text={'Penyelenggara memiliki hak untuk mengubah ataupun menambahkan syarat-syarat di syarat & ketentuan tanpa pemberitahuan lebih dahulu.'}/>
              <li>By purchasing tickets to the Justin Bieber Justice World Tour 2022 Jakarta, you have agreed to the applicable Terms and Conditions. </li>
              <TextRed text={'Dengan membeli tiket untuk Justin Bieber Justice World Tour 2022 Jakarta, Anda telah menyetujui semua Syarat dan Ketentuan yang berlaku.'}/>
            </ol>
          <h2 class="font-bold font-serif mt-5"> COVID-19 Terms & Conditions   </h2>
          <h2 class="font-bold font-serif">Syarat & Ketentuan Protokol COVID-19 </h2>
          <ol class="list-decimal">
            <li>The organizer/ promoter is monitoring local COVID-19 trends and will meet or exceed protocols mandated by local governments. By purchasing tickets to this event, you agree to the terms & conditions of this event and abide by the health & safety measures in effect at the time of the event, which may include, but not be limited to, wearing masks, providing proof of vaccination status and/or providing proof of negative COVID-19 test. Guidelines may change without prior notice. </li>
            <TextRed text={'Penyelenggara acara akan memantau tren COVID-19 dan akan memenuhi atau melampaui protokol yang diterapkan oleh pemerintah. Dengan membeli tiket untuk acara ini, Anda menyetujui syarat & ketentuan acara ini dan mematuhi langkah-langkah kesehatan & keselamatan yang berlaku pada saat acara, yang mungkin termasuk, namun tidak terbatas pada, mengenakan masker, memberikan bukti status vaksinasi dan/atau memberikan bukti tes COVID-19 yang negatif. Pedoman dapat berubah tanpa pemberitahuan sebelumnya.'}/>
            <li>Please note that mandate and protocols, including COVID-19 vaccination requirements may vary and are subject to change. Please make sure to check the latest information before coming to the event. The organizer/ promoter takes those measures against the transmission of COVID-19 so that all visitors can enjoy the show without anxiety. Thank you for your understanding and cooperation.</li>
            <TextRed text={'Harap dicatat bahwa peraturan dan protokol, termasuk persyaratan vaksinasi COVID-19 dapat bervariasi dan berubah. Pastikan untuk memeriksa informasi terbaru sebelum datang ke acara. Penyelenggara acara mengambil langkah-langkah pencegahan penularan COVID-19 agar semua pengunjung dapat menikmati pertunjukan tanpa rasa cemas. Terima kasih atas perhatian dan kerjasamanya.'}/>
          </ol>
          <h2 class="font-bold font-serif mt-5"> VIP Package Terms & Conditions </h2>
          <h2 class="font-bold font-serif">Syarat & Ketentuan VIP Package  </h2>
          <ol class="list-decimal">
            <li>Reselling of VIP packages is strictly prohibited. All package components will be revoked if resold. </li>
            <TextRed text={'Dilarang keras untuk menjual kembali paket VIP. Semua komponen paket akan dicabut jika dijual kembali.'}/>
            <li>Packages and contents are non-transferable, non-refundable and non-exchangeable. All sales are final. </li>
            <TextRed text={'Paket dan isinya tidak dapat dipindahtangankan, tidak dapat dikembalikan dan tidak dapat ditukar. Semua penjualan adalah final.'}/>
            <li>All VIP package items (including locations and package inclusions) may vary in each country and are subject to change at any time for any reason. </li>
            <TextRed text={'Semua item paket VIP (termasuk lokasi dan inklusi paket) bervariasi di setiap negara dan dapat berubah sewaktu-waktu dengan alasan apapun.'}/>
            <li>The purchaser is responsible for collecting their own packages. The schedule and instruction to collect VIP packages will be announced closer to the concert date. </li>
            <TextRed text={'Pembeli bertanggung jawab untuk mengambil paket mereka sendiri. Waktu dan instruksi pengambilan paket VIP akan diumumkan menjelang hari konser.'}/>
            <li>VIP laminates are for commemorative purposes only. The VIP laminate does not gain or authorize access into the venue or any backstage areas.   </li>
            <TextRed text={'VIP hanyalah sebuah julukan. Gelar VIP tidak dapat memberikan izin atau akses ke lokasi acara atau area belakang panggung.'}/>
          </ol>
      </div>
      <hr></hr>
      </div>

      <div class='container flex mx-auto item-center px-6'>
      <div id="layout">
              <h1 class="text-center text-2xl font-bold font-serif pt-10 mt-20"> Layout </h1>
              <div class="container mx-auto">
                <img src={LayoutPict} alt="Layout Concert"/>
                <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded">Buy Ticket</button>
              </div>
      </div>
      <hr></hr>
      </div>

      <div class='container flex mx-auto item-center px-6'>
      <div id="promoter">
              <h1 class="text-center text-2xl font-bold font-serif pt-10 mt-20"> Promoters </h1>
              <div class="container mx-auto">
                <img class="w-40 h-20 mb-10" src={LogoAeg} alt="Logo AEG"/>
                <TextParagraph text={"Combining the power of the live event with a focus on true artist development, AEG Presents is a world leader in the music and entertainment industries. "}/>
                <TextParagraph text={"Operating across four continents, the company has an unparalleled commitment to artistry, creativity, and community. Its tentpole festivals and multi-day music events — which include the iconic Coachella Valley Music & Arts Festival and the legendary New Orleans Jazz & Heritage Festival alongside American Express Presents BST Hyde Park, Stagecoach, Hangout Festival, Electric Forest, and Firefly — continue to set the bar for the live music experience. AEG Presents promotes global tours for artists such as The Rolling Stones, Elton John, Taylor Swift, Celine Dion, Justin Bieber, Kenny Chesney, Paul McCartney, and Katy Perry, in addition to — through its network of clubs, theatres, arenas, stadiums and renowned partner brands such as Goldenvoice, Messina Touring Group, Concerts West, The Bowery Presents, PromoWest Productions, Marshall Arts, Madison House Presents, and Zero Mile Presents — creating and developing an unmatched infrastructure for artist development and audience reach. "}/>
                <TextParagraph text={"More information can be found at www.aegpresents.com."}/>
                <img class="w-56 h-20 mb-10" src={LogoPk} alt="Logo PK"/>
                <TextParagraph text={"PK Entertainment, Indonesia’s leading concert promoter and event, brand activation and creative agency was established in 2015. We cover everything from brand activations to live experiences to virtual events to employee engagement, and social actions. We believe in connecting brands to audiences by creative storytelling and well thought out engagements and relationship building. "}/>
                <TextParagraph text={"With a collective experience of over 7 years, our portfolio ranges from  handling some of the biggest concerts in Jakarta including Celine Dion, Ed Sheeran, Backstreet Boys and Shawn Mendes, to creating and hosting hundreds of online events during the pandemic, making us one of the biggest music promoters and online festivals organisers in Indonesia.  "}/>
                <TextParagraph text={"As an events, brand and creative agency; we have the experience of working together with multinational companies such as Google, Facebook, Instagram, YouTube, GoTo and many more delivering over 300 offline events in the past 7 years. "}/>
                <TextParagraph text={"For more information about PK Entertainment, please visit: http://www.pk-ent.com, Instagram @pkentertainment.id"}/>
                <img class="w-48 h-7 mb-10" src={LogoSr} alt="Logo SR"/>
                <TextParagraph text={"Many International acts/names who have been brought by Sound Rhythm such as Celine Dion, The Script, One Republic, Jennifer Lopez, Katy Perry, One Direction, David Guetta, David Foster & Friends, LAUV and many more. "}/>
                <TextParagraph text={"For more information about Sound Rhythm, please visit: http://SoundRhythm.id, Instagram & twitter @SoundRhythm"}/>
              </div>
      </div>
      <hr></hr>
      </div>

      <div id="sponsor">
              <h1 class="text-center text-2xl font-bold font-serif my-10 px-6"> Sponsor </h1>
              <div class="container mx-auto">
                <img src={PartnerPict} alt="Layout Concert"/>
              </div>
      </div>
      <div id="contact" class="px-6">
      <h1 class="text-center text-2xl font-bold font-serif my-10 "> Customer Service Info </h1>
        <div class="container mx-auto">
            <TextParagraph text={"For more information about ticket purchase, wheelchair accessible seating and international purchase, please contact: "}/>
            <p class="font-bold mb-4">Loket.com</p>
            <p >Whatsapp: 021-2128-2127</p>
            <p>Phone: 021-8060-0822</p>
            <p>Email: support@loket.com</p>
        </div>
      </div>
    
      <div class="container mx-auto ">
            <h1 class="font-bold text-center my-5">Copyright </h1>
            <h1 class="font-bold text-center mt-5 mb-16">© 2022 PK ENTERTAINMENT GROUP INDONESIA. ALL RIGHTS RESERVED. </h1>
      </div>
      </div>
    </>
  )
}

export default Home