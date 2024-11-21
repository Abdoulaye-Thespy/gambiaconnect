import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const BlogDetails = () => {
  return (
    <Layout>
      <PageBanner title={"Blog Single"} />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <img
                      src="assets/images/blog/blog-single-1.jpg"
                      alt="Blog Image"
                    />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-bookmark-alt" />
                            <a href="#">Guide</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-comments-smiley" />
                            <a href="#">0 Comment</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-id-badge" />
                            <a href="#">By admin</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-calendar" />
                            <a href="#">11 OCT, 2024</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">Resource Guide for Gambian Small Business Owners: Organizations That Can Help You  </h3>

                    <article className="max-w-4xl mx-auto px-4 py-8">

                      <p className="mb-6">
                        Starting and growing a small business can be both exciting and challenging. As an entrepreneur, you&aposre often juggling many roles, from finance and marketing to customer service and operations. One thing that can make all the difference is having access to resources and support from organizations dedicated to helping small businesses thrive.
                      </p>
omment (2)
                      <p className="mb-6">
                        In this blog post, we&aposve compiled a list of organizations that offer services ranging from business advice and funding to training and networking opportunities. These organizations can provide the support you need to grow your small business in The Gambia.
                      </p>

                      {[
                        {
                          name: "The Gambia Chamber of Commerce and Industry (GCCI)",
                          description: "The GCCI is a leading organization supporting the growth of the private sector in The Gambia. They offer advocacy, networking opportunities, and business development programs. As a member, you can access market information, participate in business forums, and connect with potential business partners both locally and internationally.",
                          services: [
                            "Networking events and business forums",
                            "Capacity building and training for entrepreneurs",
                            "Advocacy for policies that support small businesses",
                            "Business information and market intelligence"
                          ],
                          contact: {
                            address: "40-41, Kairaba Avenue, Banjul, The Gambia",
                            phone: "+220 422 6977",
                            email: "info@gcci.gm",
                            website: "http://www.gcci.gm"
                          }
                        },
                        {
                          name: "National Enterprise Development Initiative (NEDI)",
                          description: "NEDI is dedicated to supporting the growth of small and medium-sized enterprises (SMEs) in The Gambia. The initiative provides training, mentorship, and financial assistance to entrepreneurs in key sectors such as agriculture, trade, and manufacturing. They also offer access to business development services and help entrepreneurs secure funding.",
                          services: [
                            "Business skills training and workshops",
                            "Access to microfinance and funding opportunities",
                            "Mentorship and business coaching",
                            "Support in developing business plans and proposals"
                          ],
                          contact: {
                            address: "Kairaba Avenue, Banjul, The Gambia",
                            phone: "+220 449 7452",
                            email: "info@nedi.gm",
                            website: "http://www.nedi.gm"
                          }
                        },
                        {
                          name: "The Gambia Investment and Export Promotion Agency (GIEPA)",
                          description: "GIEPA is focused on creating an enabling environment for businesses to grow and attract investment in The Gambia. They provide information and support on the investment climate, incentives available to small businesses, and how to access export markets. GIEPA is a great resource for those looking to scale their business or expand into international markets.",
                          services: [
                            "Investment facilitation and advisory services",
                            "Export promotion and market access support",
                            "Business registration and regulatory compliance assistance",
                            "Access to business development programs"
                          ],
                          contact: {
                            address: "Kairaba Avenue, Banjul, The Gambia",
                            phone: "+220 437 1616",
                            email: "info@giepa.gm",
                            website: "http://www.giepa.gm"
                          }
                        },
                        {
                          name: "The Gambia Women Chamber of Commerce and Industry (GWCCI)",
                          description: "The GWCCI is an advocacy and business development organization that focuses on empowering women entrepreneurs in The Gambia. Through training, networking events, and access to finance, they help women-led businesses build capacity and scale up. Their goal is to reduce the barriers women face in business and to promote gender equality in entrepreneurship.",
                          services: [
                            "Training and capacity building for women entrepreneurs",
                            "Access to markets and networking opportunities",
                            "Financial literacy and access to funding",
                            "Advocacy for policies that support women in business"
                          ],
                          contact: {
                            address: "Banjul, The Gambia",
                            phone: "+220 998 8327",
                            email: "info@gwcci.org",
                            website: "http://www.gwcci.org"
                          }
                        },
                        {
                          name: "The Gambia Youth Chamber of Commerce (GYCC)",
                          description: "GYCC is an organization that focuses on empowering young entrepreneurs in The Gambia. Through training programs, mentorship, and business development services, they provide youth with the tools they need to succeed in business. GYCC also advocates for youth-friendly policies and initiatives to support young business owners.",
                          services: [
                            "Entrepreneurship training and workshops",
                            "Business mentoring and coaching",
                            "Networking opportunities and events",
                            "Youth-led business advocacy and policy support"
                          ],
                          contact: {
                            address: "25 Bakau New Town, The Gambia",
                            phone: "+220 342 5084",
                            email: "info@gycc.gm",
                            website: "http://www.gycc.gm"
                          }
                        },
                        {
                          name: "United Nations Development Programme (UNDP) - The Gambia",
                          description: "UNDP The Gambia provides various programs aimed at supporting entrepreneurship and sustainable business practices. They assist with funding opportunities, particularly in the areas of renewable energy, agriculture, and innovation. Their focus is on ensuring that small businesses contribute to sustainable development in the country.",
                          services: [
                            "Access to grants and funding opportunities",
                            "Business development support for sustainable ventures",
                            "Advisory services on inclusive and green business models",
                            "Capacity building and knowledge transfer programs"
                          ],
                          contact: {
                            address: "16 Kairaba Avenue, Banjul, The Gambia",
                            phone: "+220 449 6644",
                            email: "registry.gm@undp.org",
                            website: "https://www.gm.undp.org"
                          }
                        },
                        {
                          name: "Gambia Microfinance Guarantee Facility (GMGF)",
                          description: "The GMGF offers financial products designed to help micro, small, and medium-sized businesses in The Gambia access loans and financial support. They provide guarantees for microfinance institutions to extend credit to small businesses, which is especially valuable for entrepreneurs who may lack collateral.",
                          services: [
                            "Loan guarantees for small businesses",
                            "Training on financial management and access to finance",
                            "Partnerships with microfinance institutions to expand business opportunities",
                            "Financial literacy programs"
                          ],
                          contact: {
                            address: "Banjul, The Gambia",
                            phone: "+220 422 3951",
                            email: "info@gmgf.gm",
                            website: "http://www.gmgf.gm"
                          }
                        }
                      ].map((org, index) => (
                        <section key={index} className="mb-8 bg-white rounded-lg shadow-md p-6">
                          <h2 className="text-2xl font-semibold mb-4">{index + 1}. {org.name}</h2>
                          <h3 className="text-xl font-medium mb-2">How They Can Help:</h3>
                          <p className="mb-4">{org.description}</p>
                          <h3 className="text-xl font-medium mb-2">Services Offered:</h3>
                          <ul className="list-disc pl-5 mb-4">
                            {org.services.map((service, i) => (
                              <li key={i} className="mb-1">{service}</li>
                            ))}
                          </ul>
                          <h3 className="text-xl font-medium mb-2">Contact Information:</h3>
                          <p>Address: {org.contact.address}</p>
                          <p>Phone: {org.contact.phone}</p>
                          <p>Email: {org.contact.email}</p>
                          <p>Website: <a href={org.contact.website} className="text-blue-600 hover:underline">{org.contact.website}</a></p>
                        </section>
                      ))}

                      <p className="mt-8 mb-6">
                        Starting and growing a small business in The Gambia is a journey that requires persistence, creativity, and access to the right resources. The organizations listed above provide essential support for entrepreneurs, whether it&aposs through training, funding, networking, or advocacy. Take advantage of these resources to help your business thrive and contribute to the economy of The Gambia.
                      </p>

                      <div className="bg-gray-100 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
                        <p>
                          Are there any other organizations or resources you&aposve found useful in your entrepreneurial journey? Let us know in the comments below!
                        </p>
                      </div>
                    </article>


                    <p>
                      Consequat magnis dis auctor hymenaeos turpis et metus orci
                      th aliquet fermentum tincidunt parturient eget montes
                      convallis nunc lacus feugiat nonummy sociis phasellus
                      etiam auctor inte justo semper voluter pat mi morbi ornare
                      nunc{" "}
                    </p>
                    <ul className="list">
                      <li className="item">
                        Class Lorem convallis nibh quam te enim consectetuer
                        nunc nisi interdum mollis risu per ultricies nulla
                        nostra tortor primis libero elementum nunc pede enim
                      </li>
                    </ul>
                    <div className="post-tag">
                      <a href="#">Feature</a>
                      <a href="#">Tourism</a>
                      <a href="#">Job &amp; Feed</a>
                      <a href="#">Musemus</a>
                    </div>
                  </div>
                </div>
                <div className="post-navigation">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="prev-post post-nav-item">
                        <Link href="/blog-details">
                          <a className="btn-link">Previous Post</a>
                        </Link>
                        <h5>
                          <Link href="/blog-details">
                            <a>Felis feugiat tellus puruse dui lectus nisi</a>
                          </Link>
                        </h5>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="next-post post-nav-item">
                        <Link href="/blog-details">
                          <a className="btn-link">Next Post</a>
                        </Link>
                        <h5>
                          <Link href="/blog-details">
                            <a>dapibus luctus do gravida feugiat fermtum</a>
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comments-area">
                  <h4 className="comments-title mb-35">Comment (0)</h4>
                </div>
                <div className="comments-respond">
                  <h4 className="comments-heading mb-20">Write a Review</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            className="form_control"
                            name="message"
                            placeholder="Write Message"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Full Name"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Type your email"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_checkbox">
                          <div className="single-checkbox d-flex">
                            <input
                              type="checkbox"
                              id="check1"
                              name="checkbox"
                              defaultChecked=""
                            />
                            <label htmlFor="check1">
                              <span>
                                Save my name, email, and website in this browser
                                for the next time i comment.
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="main-btn">Submit Review</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-widget-area">
                <div className="widget search-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Search</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Search..."
                        name="email"
                        required=""
                      />
                      <i className="ti-location-arrow" />
                    </div>
                  </form>
                </div>
                <div className="widget categories-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Categories</h4>
                  <ul className="categories-nav">
                    <li>
                      <a href="#">
                        Restaurant <span>(10)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Museums <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Business <span>(05)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Tour &amp; Travel <span>(10)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Uncategory <span>(03)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget recent-post-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Popular Post</h4>
                  <ul className="recent-post-list">
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/elements/thumb-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="post-title-date">
                        <span className="posted-on">
                          <i className="ti-calendar" />
                          <a href="#">11 OCT - 2024</a>
                        </span>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/elements/thumb-2.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="post-title-date">
                        <span className="posted-on">
                          <i className="ti-calendar" />
                          <a href="#">02 Sep - 2021</a>
                        </span>
                        <h6>
                          <Link href="/blog-details">
                            <a>Inceptos pharetra accusan tusto scelerisque</a>
                          </Link>
                        </h6>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/elements/thumb-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
                <div className="widget add-widget mb-30 wow fadeInUp">
                  <div className="add-img-box">
                    <img
                      src="assets/images/elements/add-1.jpg"
                      alt="Add Image"
                    />
                  </div>
                </div>
                <div className="widget tag-cloud-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Popular Tag</h4>
                  <a href="#">Decor</a>
                  <a href="#">Love</a>
                  <a href="#">Trendy</a>
                  <a href="#">Interior</a>
                  <a href="#">Architect</a>
                  <a href="#">Feature</a>
                  <a href="#">Modern</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BlogDetails;
