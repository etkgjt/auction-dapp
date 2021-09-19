import React from 'react';
import BreadCrumbs from '@components/Breadcrumbs';

const BlogDetail = () => {
  return (
    <section className="blog-area blog-section">
      <div className="container blog-header">
        <BreadCrumbs
          backTo="/news"
          breadCrumbs={[
            {
              to: '/news',
              title: 'Tin nổi bật',
            },
            {
              title: 'Tin chi tiết',
            },
          ]}
        />
      </div>

      <div className="container blog-detail">
        <div className="detail-box">
          <div className="blog-detail__date">
            <span>10.02.2021</span>
          </div>
          <div className="blog-detail__title">
            <span>
              Ưu đãi lớn cho các Đại lý STNHĐ đăng ký trong tháng 7-8/2021
            </span>
          </div>
          <div className="blog-detail__subtitle">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
              velit tempus erat egestas efficitur. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.{' '}
            </p>
          </div>
          <div className="blog-detail__images">
            <img
              src={require('@src/assets/images/blog-img1.jpg').default}
              alt="blog-image"
            />
          </div>
          <div className="blog-detail__content">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<h2 class="ql-align-justify"><strong>Những địa danh rồng ở Việt Nam vô cùng nổi tiếng</strong></h2><h3 class="ql-align-justify"><br></h3><h3 class="ql-align-justify"><strong>Vịnh Hạ Long - Quảng Ninh</strong></h3><p class="ql-align-justify">Vịnh Hạ Long là một di sản thiên nhiên kỳ vĩ được Unesco công nhận thu hút rất nhiều khách du lịch trong nước và nước ngoài tìm đến. Đến đây du khách có thể tìm hiểu về cuộc sống mộc mạc của những người ngư dân, hay ngắm nhìn vẻ đẹp của vùng biển trong xanh với hơn 2.000 hòn đảo lớn nhỏ. Tất cả sẽ đem lại cho bạn những trải nghiệm lý thú cho&nbsp;<a href="https://dulichvietnam.com.vn/tour/tour-ha-long.html" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 67, 131);"><strong><em>tour du lịch Hạ Long</em></strong></a>&nbsp;trong kỳ nghỉ sắp tới.</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-center"><a href="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_5.png" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);"><img src="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_5.png"></a></p><p class="ql-align-center"><em style="background-color: rgb(245, 245, 245); color: rgb(51, 51, 51);">Vịnh Hạ Long với hơn 2.000 hòn đảo lớn nhỏ. Ảnh: travel</em></p><p class="ql-align-justify"><strong><em>Địa danh rồng ở Việt Nam</em></strong>&nbsp;này thu hút du khách bởi hệ thống đảo đá và hang động tuyệt đẹp. Đảo ở Hạ Long có hai dạng là đảo phiến thạch và đảo đá vôi, tập trung chủ yếu ở hai vùng chính là vùng phía tây nam vịnh Hạ Long và vùng phía đông nam vịnh Bái Tử Long.&nbsp;</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-center"><a href="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_6.png" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);"><img src="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_6.png"></a></p><p class="ql-align-center"><em style="background-color: rgb(245, 245, 245); color: rgb(51, 51, 51);">Đảo ở Hạ Long có hai dạng là đảo phiến thạch và đảo đá vôi. Ảnh: dulichchat</em></p><p class="ql-align-justify">Nơi đây có hàng ngàn hòn đảo lớn nhỏ với những hình thù vô cùng sinh động như: hòn Đầu Người, hòn Rồng, hòn Lã Vọng, hòn Cánh Buồm, hòn Trống Mái, hòn Lư Hương… Ẩn chưa bên trong các đảo đá ấy là những hang động tuyệt đẹp như: động Thiên Cung, hang Đầu Gỗ, động Sửng Sốt, hang Trinh Nữ, động Tam Cung… Đây chính là những gì mà tạo hóa đã đặc biệt ban tặng cho&nbsp;<em><u>Vịnh Hạ Long</u></em>.</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-center"><a href="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_7.png" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);"><img src="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_7.png"></a></p><p class="ql-align-center"><em style="background-color: rgb(245, 245, 245); color: rgb(51, 51, 51);">Đây chính là những gì mà tạo hóa đã đặc biệt ban tặng cho Vịnh Hạ Long. Ảnh: onevivu</em></p><h3 class="ql-align-justify"><br></h3><h3 class="ql-align-justify"><strong>Cầu Long Biên – Hà Nội</strong></h3><p class="ql-align-justify">Cầu Long Biên là cây cầu thép đầu tiên nằm bắc qua sông Hồng, nối liền hai quận Long Biên và Hoàn Kiếm của Hà Nội. Cầu có tổng chiều dài là 2290m, 19 nhịp dầm thép được đặt trên 20 trụ với lối thiết kế vô cùng chắc chắn và lạ mắt. Cầu có một đường sắt chạ ở giữa và hai làn đường hai bên dành cho những người tham gia giao thông.</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-center"><a href="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_8.png" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);"><img src="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_8.png"></a></p><p class="ql-align-center"><em style="background-color: rgb(245, 245, 245); color: rgb(51, 51, 51);">Cầu Long Biên là cây cầu thép đầu tiên nằm bắc qua sông Hồng. Ảnh: kenh14cdn</em></p><p class="ql-align-justify"><em><u>Cầu Long Biên</u></em>&nbsp;là nơi đã chứng kiến hai cuộc chiến tranh khóc liệt của đất nước. Mục đích ban đầu để xây dựng cây cầu này là nhằm phục vụ cho việc lưu thông hàng hóa được thuận tiện. Và hiện nay cây cầu không chỉ là một nơi để người dân có thể qua lại mà còn là điểm du lịch mang đậm dấu ấn lịch sử hào hùng.</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-center"><a href="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_9.png" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);"><img src="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_9.png"></a></p><p class="ql-align-center"><em style="background-color: rgb(245, 245, 245); color: rgb(51, 51, 51);">Cầu Long Biên là nơi đã chứng kiến hai cuộc chiến tranh khóc liệt của đất nước. Ảnh: cdnxbvn</em></p><p class="ql-align-justify">Khi đặt chân đến với&nbsp;<strong><em>địa danh rồng ở Việt Nam</em></strong>&nbsp;này, bạn sẽ được chứng kiến nhịp sống rất nhẹ nhàng, êm đềm. Đây cũng là nơi được rất nhiều du khách trong và ngoài nước tìm đến để khám phá và check in mỗi khi có dịp đến với thủ đô Hà Nội.&nbsp;</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-center"><a href="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_10.png" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);"><img src="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_10.png"></a></p><p style="margin:0px"><em style="background-color: rgb(245, 245, 245); color: rgb(51, 51, 51);">Khi đặt chân đến với địa danh rồng ở Việt Nam này, bạn sẽ được chứng kiến nhịp sống rất nhẹ nhàng, êm đềm. Ảnh: cdnxbvn</em></p><p class="ql-align-justify">Theo&nbsp;<a href="https://dulichvietnam.com.vn/kinh-nghiem/viet-nam/ha-noi/" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 67, 131);"><strong><em>kinh nghiệm du lịch Hà Nội</em></strong></a>&nbsp;thì gần cầu Long Biên có quán cà phê mang tên Serein Cafe với không gian mở giúp bạn có thể ngắm nhìn toàn cảnh cầu Long Biên từ trên cao. Tuy mở chưa lâu nhưng nhờ có view tuyệt đẹp nên quán luôn luôn đông khách. Tại đây bạn sẽ được quan sát cây cầu ở một vị trí hoàn toàn khác.</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-center"><a href="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_11.png" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);"><img src="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_11.png"></a></p><p class="ql-align-center"><em style="background-color: rgb(245, 245, 245); color: rgb(51, 51, 51);">Quán cà phê mang tên Serein Cafe với không gian mở giúp bạn có thể ngắm nhìn toàn cảnh cầu Long Biên từ trên cao. Ảnh: digifood</em></p><p class="ql-align-center"><strong><em>&gt;&gt; Xem thêm:&nbsp;</em></strong><a href="https://dulichvietnam.com.vn/song-ao-chay-may-o-nhung-diem-du-lich-o-viet-nam.html" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 67, 131);"><strong><em>Hết dịch ta lại đến sống ảo cháy máy ở những điểm du lịch ở Việt Nam</em></strong></a></p><h3 class="ql-align-justify"><br></h3><h3 class="ql-align-justify"><strong>Cầu Rồng - Đà Nẵng</strong></h3><p class="ql-align-justify">Hình ảnh con rồng đã ăn sâu vào lối kiến trúc, điêu khắc từ xưa đến nay và trở thành biểu tượng thiêng liêng của dân tộc Việt Nam. Thân rồng uốn lượn mềm mại, uyển chuyển, đầu trong thế ngẩng cao thể hiện sự quyền lực, khát vọng muốn bay cao bay xa. Phải khẳng định rằng đây không chỉ là côn trình kiến trúc độc đáo mà còn mang tầm ý nghĩa vô cùng to lớn.</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-center"><a href="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_12.png" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);"><img src="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_12.png"></a></p><p class="ql-align-center"><em style="background-color: rgb(245, 245, 245); color: rgb(51, 51, 51);">Thân rồng uốn lượn mềm mại, uyển chuyển, đầu trong thế ngẩng cao thể hiện sự quyền lực, khát vọng muốn bay cao bay xa. Ảnh: kenh14cdn</em></p><p class="ql-align-justify">Khi màn đêm buông xuống cũng chính là lúc cả cây cầu được khoác lên mình chiếc áo rực rỡ. Sẽ thật thú vị nếu như bạn được bước đi trên cây cầu và nhìn vẻ đẹp lung linh của nó. Dù ở góc độ nào cũng cũng nhìn thấy được sự hiện đại và thu hút của cây cầu. Bởi vì khắp cầu Rồng được lắp đặt hơn 15.000 bóng đèn LED tạo nên một chiếc cầu vô cùng sống động hút hồn mọi du khách.</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-center"><a href="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_13.png" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);"><img src="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_13.png"></a></p><p class="ql-align-center"><em style="background-color: rgb(245, 245, 245); color: rgb(51, 51, 51);">Khi màn đêm buông xuống cũng chính là lúc cả cây cầu được khoác lên mình chiếc áo rực rỡ. Ảnh: thuthuatnhanh</em></p><p class="ql-align-justify">Mọi sự độc đáo của cầu Rồng chưa dừng lại hẳn ở đó,&nbsp;<strong><em>địa danh rồng ở Việt Nam</em></strong>&nbsp;này còn đặc biệt bởi có hệ thống phun lửa, phun nước theo ánh sáng và nhạc kịch. Nếu bạn đến Đà Nẵng vào những ngày cuối tuần hoặc dịp lễ thì sẽ được chiêm ngưỡng vẻ đẹp này.</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-center"><a href="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_14.png" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);"><img src="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_14.png"></a></p><p class="ql-align-center"><em style="background-color: rgb(245, 245, 245); color: rgb(51, 51, 51);">Cây cầu độc đáo thu hút nhiều du khách. Ảnh: swedentravelnet</em></p><h3 class="ql-align-justify"><br></h3><h3 class="ql-align-justify"><strong>Núi Hàm Rồng – Sapa</strong></h3><p class="ql-align-justify">Núi Hàm Rồng là một trong những điểm&nbsp;<a href="https://dulichvietnam.com.vn/sapa.html" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 67, 131);"><strong><em>du lịch Sapa</em></strong></a>&nbsp;vô cùng nổi tiếng dành cho bạn, nơi đây được chia thành 3 khu vực chính đó là vườn hoa Hàm Rồng, vườn đá Thạch Lâm và Sân Mây.</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-center"><a href="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_1.png" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);"><img src="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_1.png"></a></p><p class="ql-align-center"><em style="background-color: rgb(245, 245, 245); color: rgb(51, 51, 51);">Núi Hàm Rồng là một trong những điểm du lịch Sapa vô cùng nổi tiếng. Ảnh: tadivui</em></p><p class="ql-align-justify">Vườn hoa Hàm Rồng Sapa là một khuôn viên được trồng rất nhiều các loại cây, hoa khác nhau, khoe sắc suốt 4 mùa. Ở đây bạn có thể thoải mái check in ở mọi góc. Nếu muốn hóa thân thành những chàng trai, cô gái vùng cao, bạn cũng có thể thuê quần áo ở ngay trong khu vườn hoa với mức giá khá hợp lý.</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-center"><a href="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_2.png" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);"><img src="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_2.png"></a></p><p class="ql-align-center"><em style="background-color: rgb(245, 245, 245); color: rgb(51, 51, 51);">Vườn hoa Hàm Rồng Sapa là một khuôn viên được trồng rất nhiều các loại cây, hoa khác nhau. Ảnh: chudu24</em></p><p class="ql-align-justify">Tiếp đến là vườn đá Thạch Lâm. Đập vào mắt bạn đầu tiên là hai chữ “Hàm Rồng” khổng lồ, được tỉa từ những khóm cây rất bắt mắt. Sau đó bạn sẽ được bước vào mê cung đá với rất nhiền tảng đá dựng đứng. Đi trong vườn đá, bạn sẽ cảm nhận được không gian tĩnh mịch, huyền bí của những bức tường đá xen lẫn những bụi cây.&nbsp;</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-center"><a href="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_3.png" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);"><img src="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_3.png"></a></p><p class="ql-align-center"><em style="background-color: rgb(245, 245, 245); color: rgb(51, 51, 51);">Tiếp đến là vườn đá Thạch Lâm. Ảnh: sapadi</em></p><p class="ql-align-justify">Và điểm đến cuối cùng trong hành trình khám phá&nbsp;<strong><em>địa danh rồng ở Việt Nam</em></strong>&nbsp;này chính là Sân Mây, đây là một đài quan sát được đặt ngay trên đỉnh núi Hàm Rồng tại Sapa. Tại đây bạn có thể thỏa thích ngắm nhìn toàn bộ vẻ đẹp của thị trấn Sapa phía dưới với rừng núi hoa sơ, nhà thờ đá Sapa độc đáo, những khu phố sầm uất, …</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-center"><a href="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_4.png" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);"><img src="https://dulichvietnam.com.vn/vnt_upload/news/09_2021/Dia_danh_rong_o_Viet_Nam_4.png"></a></p><p class="ql-align-center"><em style="background-color: rgb(245, 245, 245); color: rgb(51, 51, 51);">Tại Sân Mây bạn có thể thỏa thích ngắm nhìn toàn bộ vẻ đẹp của thị trấn Sapa. Ảnh: cattour</em></p><p class="ql-align-justify">Bạn đã khám phá hết những&nbsp;<strong><em>địa danh rồng ở Việt Nam</em></strong>&nbsp;vô cùng nổi tiếng này chưa? Nếu chưa, hãy cùng mình đến ngay với những vùng đất thiêng, những danh lam thắng cảnh, những di tích lịch sử mang tên “rồng” kể trên, cùng nhau tìm hiểu, khám phá để biết được đất nước Việt Nam ta xinh đẹp đến nhường nào.</p><p class="ql-align-right"><strong><em>Hồng Ánh</em></strong></p><p class="ql-align-right"><strong><em>Theo Báo Thể Thao Việt Nam</em></strong></p><p style="margin:0px"><br></p>',
              }}
            />
          </div>
          <div className="dash-devider"></div>
          <div className="blog-detail__tag">
            <div className="tag-title">
              <span>Tags:</span>
            </div>
            <div className="tag-list">
              <ul id="tags">
                <li>
                  <a>product design </a>
                </li>
                <span>,&nbsp;</span>
                <li>
                  <a>product design</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container blog-same">
        <div className="blog-title">
          <span>Tin khác</span>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <a href="/#" className="post-image">
                <img
                  src={require('@src/assets/images/blog-img1.jpg').default}
                  alt="blog-image"
                />
              </a>

              <div className="blog-post-content">
                <ul>
                  <li>10.02.2021</li>
                </ul>
                <h3>
                  <a href="/#">The Most Popular New Business Apps</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  turpis massa, dapibus nec libero vitae.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <a href="/#" className="post-image">
                <img
                  src={require('@src/assets/images/blog-img2.jpg').default}
                  alt="blog-image"
                />
              </a>

              <div className="blog-post-content">
                <ul>
                  <li>10.02.2021</li>
                </ul>
                <h3>
                  <a href="/#">The Best Marketing Management Tools</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  turpis massa, dapibus nec libero vitae.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <a href="/#" className="post-image">
                <img
                  src={require('@src/assets/images/blog-img3.jpg').default}
                  alt="blog-image"
                />
              </a>

              <div className="blog-post-content">
                <ul>
                  <li>10.02.2021</li>
                </ul>
                <h3>
                  <a href="/#">3 WooCommerce Plugins to Boost Sales</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  turpis massa, dapibus nec libero vitae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
