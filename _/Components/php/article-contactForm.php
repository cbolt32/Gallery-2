<article class="contactForm">
    <h2>Contact Us</h2>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, distinctio dolor, ea eaque eum explicabo harum,
    illum itaque iure

    <form class="contactUs form-horizontal" id="contactUs" method="post" action="contactValidation.php">
<!--        todo-Chris redirect and styling on thankyou page-->
        <fieldset id="personalInfo">
            <legend>Personal Information</legend>

            <section class="row">
                <label class="col COL-LG-4 control-label" for="myName">Name</label>

                <div class="controls">
                    <input class="col col-lg-8" type="text" name="myName" id="myName" autofocus
                           placeholder="Last, First" required/>
                </div>
                <!--controls-->
            </section>
            <!--row-->

            <section class="row">
                <label class="col COL-LG-4 control-label" for="myEmail">Email</label>

                <div class="controls">
                    <input class="col col-lg-8" type="text" name="myEmail" id="myEmail" autofocus
                           placeholder="email@yserviceprovider.com" required/>
                </div>
                <!--controls-->
            </section>
            <!--row-->

            <section class="row">
                <label class="col COL-LG-4 control-label" for="email">Phone Number</label>

                <div class="controls">
                    <input class="col col-lg-8" type="text" name="phoneNum" id="phoneNum" autofocus
                           placeholder="01273 000000" required/>
                </div>
                <!--controls-->
            </section>
            <!--row-->
        </fieldset>
                                                                                                        <!--Personal info-->

        <fieldset id="enquiry">
            <legend>Enquiry Details</legend>

            <section class="row">
                <label for="enquiryType" class="col COL-LG-4 control-label">What is your enquiry?</label></br>
                <select name="enquiryType" id="enquiryType" class="col col-lg-8">
                    <option>Please Choose One...</option>
                    <option value="generalEnquiry">General Enquiry</option>
                    <option value="feedbackEnquiry">Feedback</option>
                    <option value="otherEnquiry">Other Enquiry</option>
                </select>
            </section>
            <section class="row">
                <label class="col COL-LG-4 control-label" for="enquiryText">Your Enquiry</label>

                <div class="controls">
                    <input class="col col-lg-8" type="text" name="enquiryText" id="enquiry" autofocus
                           placeholder="Your Enquiry..." required style="height: 150px"/>
                </div>
                <!--controls-->
            </section>
            <!--row-->
            </br>
            <label>Subscribe</label>
            <label class="checkbox">
                <input type="checkbox" id="subscribe" name="subscribe" CHECKED value="yes"/>
                Would you like to subscribe to our e-mail list?
            </label></br>

        </fieldset>
                                                                                                        <!--enquiry-->
        <button type="submit" id="submit" class="btn btn-lg col COL-LG-4">Submit</button>

    </form>
    <!-- </br>
     </br>
     </br>-->
    <div class="contactDetails col col-lg-8">
        <iframe class="googleMap" width="425" height="350" frameborder="110" scrolling="no" marginheight="110"
                marginwidth="110"
                src="http://maps.google.co.uk/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=BN44+3WE&amp;sll=53.800651,-4.064941&amp;sspn=21.297675,39.506836&amp;vpsrc=0&amp;ie=UTF8&amp;hq=&amp;hnear=Bramber+BN44+3WE,+United+Kingdom&amp;ll=50.882783,-0.312282&amp;spn=0.010668,0.013239&amp;t=m&amp;    z=14&amp;output=embed">
        </iframe>

        <p class="pull-right">Shans Studio</p></br>
            <br/>
            <a class="googleMapLink"
               href="http://maps.google.co.uk/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=BN44+3WE&amp;sll=53.800651,-4.064941&amp;sspn=21.297675,39.506836&amp;vpsrc=0&amp;ie=UTF8&amp;hq=&amp;hnear=Bramber+BN44+3WE,+United+Kingdom&amp;ll=50.882783,-0.312282&amp;spn=0.010668,0.013239&amp;t=m&amp;z=10"
               style="color:#0000FF;text-align:left">View Larger Map</a>
    </div>
    <!--contact details-->


</article>