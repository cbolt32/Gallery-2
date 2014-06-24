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
                           placeholder="First, Last" required/>
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
            <button type="submit" id="submit" class="btn btn-lg btn-success col COL-LG-4 ">Submit</button>

        </fieldset><!--enquiry-->
    </form>
</article>