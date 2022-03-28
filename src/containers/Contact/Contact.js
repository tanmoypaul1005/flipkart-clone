import React from 'react';

const Contact = () => {
    return (
        <div>
            <div class="container-fluid section-marginTop parallax text-center">
                <div class="row ">
                    <div class="col-md-6 contact-form ">
                        <h5 class="help-line-title"> <i class="fas icon-custom-color fa-headphones-alt"></i> Helpline </h5>
                        <h5 class="help-line-title m-0"> O1736932489 </h5>
                    </div>
                    <div class="col-md-4 contact-form">
                        <h5 style={{ color: 'white' }}>Contact </h5>
                        <div class="form-group ">
                            <input type="text" class="form-control w-100" placeholder="Your Name" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control  w-100" placeholder="Moibile No" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control  w-100" placeholder="Your Name " />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control  w-100" placeholder="Message " />
                        </div>
                        <button type="submit" class="btn btn-block normal-btn w-100">Send</button>
                    </div>
                    <div class="col-md-2">

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Contact;