import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const AddListing = () => {
  return (
    <Layout>
      <PageBanner title={"Add Listing"} pageName={"Listing"} />
      <section className="fioxen-add-listing pt-120 pb-120">
        <div className="container">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="add-listing-form general-listing-form mb-60 wow fadeInUp">
                  <h4 className="title">Add New Business</h4>
                  <div className="row">
                    {/* <div className="col-lg-12">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Business/Organization Name"
                          name="business"
                          required=""
                        />
                      </div>
                    </div> */}

                    <div className="col-lg-12">
                      <div className="form_group">    
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon1">🏢</InputGroup.Text>
                          <Form.Control
                            placeholder="Business/Organization Name"
                            aria-label="business"
                            aria-describedby="basic-addon1"
                            required=""
                          />
                        </InputGroup>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form_group">    
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon1">📍</InputGroup.Text>
                          <Form.Control
                            placeholder="Adress"
                            name="adress"
                            required=""
                          />
                        </InputGroup>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form_group">    
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon1">📞</InputGroup.Text>
                          <Form.Control
                            placeholder="Phone Number"
                            name="phone"
                            required=""
                          />
                        </InputGroup>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form_group">    
                        <InputGroup className="mb-3">
                          <Form.Control
                            placeholder="Email Address"
                            name="email"
                            required=""
                          />
                        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                        </InputGroup>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form_group">    
                        <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon2">www.mywebsite.com</InputGroup.Text>
                          <Form.Control
                            placeholder="Website Link"
                            name="website"
                            required=""
                          />
                        </InputGroup>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form_group">    
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon1">🔗</InputGroup.Text>
                          <Form.Control
                            placeholder="https://facebook.com/mypage"
                            name="social"
                            required=""
                          />
                        </InputGroup>
                      </div>
                    </div>

                    <div className="col-lg-6"> 
                      <div className="form_group">
                        <InputGroup className="mb-3">
                          <DropdownButton
                            variant="outline-secondary"
                            title="Business category"
                            id="input-group-dropdown-1"
                            name="dropdown"
                          >
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                          </DropdownButton>
                          <Form.Control aria-label="Text input with dropdown button" />
                        </InputGroup>
                      </div>
                    </div>

                    <div className=".col-lg-6">
                      <div className="form_group">
                        <InputGroup controlId="formFile" className="mb-3">
                          <Form.Control 
                          type="file" 
                          name="picture"
                          placeholder="Add your picture"
                          />
                        </InputGroup>
                      </div>
                    </div>

                    {/* <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Company Website"
                          name="website"
                          required=""
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Social Media Handles"
                          name="social"
                          required=""
                        />
                      </div>
                    </div> */}



                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea
                          className="form_control"
                          placeholder="Description"
                          name="discription"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ----------- */}

                <div className="add-listing-form general-listing-form mb-60 wow fadeInUp">
                  <h4 className="title">ADMIN</h4>
                  <div className="row">
                    
                    <div className="col-lg-12">
                      <div className="form_group">    
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon1">🏢</InputGroup.Text>
                          <Form.Control
                            placeholder="Business/Organization Name"
                            aria-label="business"
                            aria-describedby="basic-addon1"
                            required=""
                          />
                        </InputGroup>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form_group">    
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon1">📍</InputGroup.Text>
                          <Form.Control
                            placeholder="Adress"
                            name="adress"
                            required=""
                          />
                        </InputGroup>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form_group">    
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon1">📞</InputGroup.Text>
                          <Form.Control
                            placeholder="Phone Number"
                            name="phone"
                            required=""
                          />
                        </InputGroup>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form_group">    
                        <InputGroup className="mb-3">
                          <Form.Control
                            placeholder="Email Address"
                            name="email"
                            required=""
                          />
                        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                        </InputGroup>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form_group">    
                        <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon2">www.mywebsite.com</InputGroup.Text>
                          <Form.Control
                            placeholder="Website Link"
                            name="website"
                            required=""
                          />
                        </InputGroup>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form_group">    
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon1">🔗</InputGroup.Text>
                          <Form.Control
                            placeholder="https://facebook.com/mypage"
                            name="social"
                            required=""
                          />
                        </InputGroup>
                      </div>
                    </div>

                    <div className="col-lg-6"> 
                      <div className="form_group">
                        <InputGroup className="mb-3">
                          <DropdownButton
                            variant="outline-secondary"
                            title="Business category"
                            id="input-group-dropdown-1"
                            name="dropdown"
                          >
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                          </DropdownButton>
                          <Form.Control aria-label="Text input with dropdown button" />
                        </InputGroup>
                      </div>
                    </div>

                    <div className=".col-lg-6">
                      <div className="form_group">
                        <InputGroup controlId="formFile" className="mb-3">
                          <Form.Control 
                          type="file" 
                          name="picture"
                          placeholder="Add your picture"
                          />
                        </InputGroup>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea
                          className="form_control"
                          placeholder="Description"
                          name="discription"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ----------- */}


                <div className="add-listing-form details-listing-form mb-60 wow fadeInUp">
                  <h4 className="title">Details Information</h4>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Name"
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
                          placeholder="Email"
                          name="email"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Phone"
                          name="phone"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="url"
                          className="form_control"
                          placeholder="Website"
                          name="website"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Designation"
                          name="name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Company"
                          name="name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="url"
                          className="form_control"
                          placeholder="Facebook (Optional)"
                          name="website"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="url"
                          className="form_control"
                          placeholder="Twitter (Optional)"
                          name="website"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="url"
                          className="form_control"
                          placeholder="Linked (Optional)"
                          name="website"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="url"
                          className="form_control"
                          placeholder="Skype (Optional)"
                          name="website"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-listing-form upload-listing-form mb-60 wow fadeInUp">
                  <h4 className="title">Gallery Images</h4>
                  <p>Click here or drope files to upload</p>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form_group file-input-one">
                        <input type="file" name="Image" />
                        <div className="upload-content">
                          <div className="upload-title-icon d-flex align-items-center justify-content-center">
                            <img
                              src="assets/images/elements/input-1.png"
                              alt="Image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form_group file-input-one">
                        <input type="file" name="Image" />
                        <div className="upload-content">
                          <div className="upload-title-icon d-flex align-items-center justify-content-center">
                            <img
                              src="assets/images/elements/input-1.png"
                              alt="Image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form_group file-input-one">
                        <input type="file" name="Image" />
                        <div className="upload-content">
                          <div className="upload-title-icon d-flex align-items-center justify-content-center">
                            <img
                              src="assets/images/elements/input-1.png"
                              alt="Image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group file-input-two">
                        <input type="file" name="Video" />
                        <div className="upload-content">
                          <div className="upload-title-icon d-flex align-items-center justify-content-center">
                            <img
                              src="assets/images/elements/input-2.png"
                              alt="Image"
                            />
                            <span>Add Video +</span>
                          </div>
                        </div>
                      </div>
                      <div className="form_group file-input-two">
                        <input type="file" name="Image" />
                        <div className="upload-content">
                          <div className="upload-title-icon d-flex align-items-center justify-content-center">
                            <img
                              src="assets/images/elements/input-3.png"
                              alt="Image"
                            />
                            <span>Add Video +</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-listing-form amenities-listing-form mb-60 wow fadeInUp">
                  <h4 className="title">Amenities</h4>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form_group">
                        <div className="single-checkbox d-flex">
                          <input
                            type="checkbox"
                            id="check1"
                            name="checkbox"
                            defaultChecked=""
                          />
                          <label htmlFor="check1">
                            <span>Alarm system</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="check2" name="checkbox" />
                          <label htmlFor="check2">
                            <span>Alarm system</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="check3" name="checkbox" />
                          <label htmlFor="check3">
                            <span>Alarm system</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form_group">
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="check4" name="checkbox" />
                          <label htmlFor="check4">
                            <span>Janitor</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="check5" name="checkbox" />
                          <label htmlFor="check5">
                            <span>Onsite management</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="check6" name="checkbox" />
                          <label htmlFor="check6">
                            <span>Janitor</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form_group">
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="check7" name="checkbox" />
                          <label htmlFor="check7">
                            <span>Depanneur in building</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="check8" name="checkbox" />
                          <label htmlFor="check8">
                            <span>Depanneur in building</span>
                          </label>
                        </div>
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="check9" name="checkbox" />
                          <label htmlFor="check9">
                            <span>Depanneur in building</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-listing-form map-form mb-60 wow fadeInUp">
                  <div className="map-box">
                    <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                  </div>
                </div>
                <div className="add-listing-form timing-listing-form mb-60 wow fadeInUp">
                  <h4 className="title">Opening Hours</h4>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="timeing-list">
                        <h5>
                          Monday<span className="time">08 am - 05 pm</span>
                        </h5>
                      </div>
                      <div className="timeing-list">
                        <h5>
                          Tuesday<span className="time">08 am - 05 pm</span>
                        </h5>
                      </div>
                      <div className="timeing-list">
                        <h5>
                          Wednesday<span className="time">08 am - 05 pm</span>
                        </h5>
                      </div>
                      <div className="timeing-list">
                        <h5>
                          Thursday<span className="time">08 am - 05 pm</span>
                        </h5>
                      </div>
                      <div className="timeing-list">
                        <h5>
                          Friday<span className="time">08 am - 05 pm</span>
                        </h5>
                      </div>
                      <div className="timeing-list">
                        <h5>
                          Saturday<span className="time">08 am - 05 pm</span>
                        </h5>
                      </div>
                      <div className="timeing-list">
                        <h5>
                          Saturday<span className="time">08 am - 05 pm</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button text-center">
                  <button className="main-btn icon-btn">Submit Listing</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};
export default AddListing;
