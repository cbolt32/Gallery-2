<article class="contactForm" xmlns="http://www.w3.org/1999/html">
    <h2>Make Contact</h2>
    <article>
       <p> Please contact me if you wish to discuss any opportunities, if you would like to offer feedback on my site or any pieces of work you have seen in my portfolio. Or if you would just like to say, Hi!</p></br>
        <p>Feel free also to explorer the various social media links above and make contact via those if you prefer.</p>
    </article>

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

        <fieldset id="enquiryDetails">
            <legend>Enquiry Details</legend>

            <section class="row">
                <label for="enquiryType" class="col COL-LG-4 control-label">What is your enquiry?</label></br>
                <select name="enquiryType" id="enquiryType" class="col col-lg-8">
                    <option>Please Choose One...</option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other Enquiry">Other Enquiry</option>
                </select>
            </section>
            </br>
            <section class="row">
                <label class="col COL-LG-4 control-label" for="enquiry">Your Enquiry</label>
                <div class="controls">
                    <textarea class="col col-lg-8" type="text" name="enquiry" id="enquiry" autofocus
                              placeholder="Your Enquiry..." rows="5"></textarea>
                </div>
                <!--controls-->
            </section>
            <!--row-->
            </br>
<!--            <label>Subscribe</label>-->
<!--            <label class="checkbox">-->
<!--                <input type="checkbox" id="subscribe" name="subscribe" CHECKED value="yes"/>-->
<!--                Would you like to subscribe to our e-mail list?-->
<!--            </label></br>-->

            <button type="submit" id="submit" class="btn btn-lg btn-success col COL-LG-4 ">Submit</button>

        </fieldset>
        <!--enquiry-->


    </form>
    <!-- </br>
     </br>
     </br>-->
<!--<!--    <div class="contactDetails col col-lg-8">-->-->
<!--        <iframe class="googleMap" width="425" height="350" frameborder="110" scrolling="no" marginheight="110"-->
<!--                marginwidth="110"-->
<!--                src="http://maps.google.co.uk/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=BN44+3WE&amp;sll=53.800651,-4.064941&amp;sspn=21.297675,39.506836&amp;vpsrc=0&amp;ie=UTF8&amp;hq=&amp;hnear=Bramber+BN44+3WE,+United+Kingdom&amp;ll=50.882783,-0.312282&amp;spn=0.010668,0.013239&amp;t=m&amp;    z=14&amp;output=embed">-->
<!--        </iframe>-->
<!---->
<!--        <p class="pull-right">Shans Studio</p></br>-->
<!--        <br/>-->
<!--        <a class="googleMapLink"-->
<!--           href="http://maps.google.co.uk/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=BN44+3WE&amp;sll=53.800651,-4.064941&amp;sspn=21.297675,39.506836&amp;vpsrc=0&amp;ie=UTF8&amp;hq=&amp;hnear=Bramber+BN44+3WE,+United+Kingdom&amp;ll=50.882783,-0.312282&amp;spn=0.010668,0.013239&amp;t=m&amp;z=10"-->
<!--           style="color:#0000FF;text-align:left">View Larger Map</a>-->
<!--<!--    </div>-->-->
    <!--contact details-->
    <?php include "_/components/php/googleMaps.php"; ?>

</article>