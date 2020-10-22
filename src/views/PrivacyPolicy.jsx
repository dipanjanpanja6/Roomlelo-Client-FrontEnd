import React, { useEffect } from "react";
import { Grid, makeStyles, Typography, Toolbar, Divider, Chip } from '@material-ui/core'

import PropType from 'prop-types'
import Footer from "../components/footer";
import { bookClear } from "../redux/actions/bookAction";
import { connect } from "react-redux";
import Alert from '@material-ui/lab/Alert';



const style = makeStyles((theme) => ({
    book: {
        border: `solid ${theme.palette.background.paper} 20px`,
        padding: 34,
        // backgroundColor: 'rgba(196, 196, 196, 0.19)',
        backgroundColor: theme.palette.secondary.main,
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    topic: {
        padding: 12,
        textAlign: 'center'
    },
    subTitle: {
        paddingTop: 20
    }

}))
const TenantTerms = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Tenant Terms | RoomLelo'
        props.bookClear()
    }, [])

    const sty = style()
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Toolbar />
            <Grid container style={{ flexGrow: 1 }}>
                <Grid container item sm={4} className={sty.book}>
                    <Grid container justify='center' alignItems='center' style={{ flexDirection: 'column', }}>
                        <Typography variant="h4" className={sty.topic}>
                            Privacy Policy
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container item sm={8} style={{ flexDirection: 'column', padding: 25 }}>
                    <Grid  >
                        <div style={{ width: '100%' }}>

                            <Alert variant="filled" severity="error">
                                This site is on devolvement state. If you are facing any difficulty please whatsApp/Call on <a href="https://api.whatsapp.com/send?phone=917667651878&fbclid=IwAR0ASfOooEnNvOFx0opGXp8vit72QfSz_tXE-lnCwp7uVqO_mX5sGd0Ja-w" >+91 76676 51878</a> — check it out!
                    </Alert>
                            <br />
                            <Divider />
                        </div>
                        <Typography variant='h4' style={{ paddingBottom: 10 }}>
                            <b>Privacy Policy</b>
                        </Typography>
                        <Chip color='primary' label='TENANT' />
                        <br /><br />
                        <Typography variant='body2' color='textSecondary' style={{ paddingBottom: 10, paddingTop: 30 }}>
                            <b>Privacy Policy</b>
                        </Typography>
                        <Typography variant='subtitle2'>
                            Objective, Scope and Applicability of the Policy, The privacy policy (“Policy”) is applicable to the online interfaces of RLL TECHNOLOGY Pvt Ltd. (“Roomlelo”, “us”, “we” or “our”) including <a href="www.roomlelo.in">www.roomlelo.in</a>, the mobile site/applications (including but not limited to the Roomlelo, or any other app) for iOS, Android, or any other windows operating system (collectively referred to as “Site”). The purpose of this Policy is to describe how Roomlelo collects, uses, maintains and shares information about you (“user” or “you” or “your”) on account of you accessing and using the Site. This information may include but is not limited to any information you upload, emails that you exchange with Roomlelo and other users of the Site and any information submitted/ provided by you to Roomlelo.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            We recognize the importance of your privacy and we are committed to ensuring that you are aware of how your information is being used. Please read this Policy carefully to understand how we collect and use your information. Your use of the Site is also governed by our Terms of Use. You are free to use the Site only if you agree with our policies and practices encapsulated in this Policy read in conjunction with the Terms of Use.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            By using the Site and/or by providing your information to us, you consent to the collection and use of the information you disclose on the Site in accordance with this Policy. If you wish to contact Roomlelo in connection with any matter relating to this Policy or privacy related issues you may send an email to <a href="mailto:contact@roomlelo.in">contact@roomlelo.in</a> . Alternatively, you may raise your concern using your Account (as defined below).
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            By browsing, visiting, accessing and/or using the services on the Site, you consent and agree to the terms of Roomlelo’s Policy as detailed herein.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            You also agree that the information furnished by you is lawful, true and correct and does not violate or infringe any laws. In case of any violations, infringement, furnishing of wrongful or unauthorized information, Roomlelo shall not be liable to you or to any third party for the same.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            We use data collection devices such as "cookies" on certain pages of the Site to help analyse our web page flow, measure promotional effectiveness, and promote trust and safety. The term "cookies" means small files placed on your hard drive that assist us in providing our services. We also use cookies to allow you to enter your password less frequently during a session. Cookies can also help us provide information that is targeted to your interests. You are always free to decline our cookies if your browser permits, although in that case you may not be able to use certain features on the Site. Additionally, you may encounter "cookies" or other similar devices on certain pages of the Site that are placed by third parties. Roomlelo does not control the use of cookies by third parties.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Types/ Nature of Information we Collect: There are three (3) general categories of information we collect.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            A. Information you provide us, to enable your use of the Account/Site B. Information you choose to give us C. Information that is necessary for the payment related services
                        </Typography>
                        <br />
                        <br />
                        <Typography variant='subtitle2'>
                            Further to each of the aforementioned categories set out in Section II: Sub-Section A, B and C above we collect the following types of information from you (collectively referred to as “Information”) “Personally Identifiable Information” - information that could be used to identify you such as, your name, email address, age, gender, IP addresses and other similar information; “Sensitive Personal Information” such as passwords in encrypted form and secured financial/ payment related information; “Non-Personal Information” - information that cannot be used to identify you such as the webpages that you have viewed and your usage patterns; and (iv) “Device Information”- information which is automatically collected about the device from which the Site is used.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Information you provide Roomlelo to enable your use of the Account/Site We ask for and collect the following Personally Identifiable Information and Sensitive Personal Information about you when you use the Site. This information is necessary for performance of the agreement between you and us and to allow us to comply with our legal obligations. Without it, we may not be able to provide you with all the requested services.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Account Information. In order to use certain features on the Site, Roomlelo may require you to create a user account (“Account”) which shall include your user profile (“Profile”). When you opt to create such an Account and sign /click on “I Accept” in respect of the creation of an Account, we require you to provide certain Personally Identifiable information such as your first name, last name, email address, date of birth, place of birth, employer name, phone number, interests, and depending on the nature of services you avail, information pertaining to your gender and marital status.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Profile and Listing Information. In addition to (i) above, in order to use certain features on the Site (such as booking or creating a listing), we may ask you to provide certain additional Personally Identifiable Information, which may include your address, phone number, and a profile picture
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Identity Verification Information. To help create and maintain a trusted environment, we may collect certain Personally Identifiable Information in order to verify your identity, such as images of specified government issued identification, including passport, national ID card, or driving license, or any other information as may be required to verify your identity.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Payment Information. In addition to the foregoing, in order to use certain other features on the Site (such as booking or creating a listing), we may require you to provide certain financial information (as more particularly described in sub section C below) in order to facilitate the processing of payments.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Communications with Roomlelo and its affiliates and authorised service providers/agents or other users. When you communicate with Roomlelo or use the Site to communicate with Roomlelo’s affiliates and authorised service providers/agents or when you communicate with other users of Roomlelo, we collect all such correspondence, information about your communication and any additional information you choose to provide.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Information you choose to give us, You may choose to provide us with additional Personally Identifiable Information in order to obtain a better user experience when using Roomlelo.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Additional Profile Information. You may choose to provide additional Personally Identifiable Information as part of your Profile (preferred language(s), city, and a personal description). Some of this information as indicated in your account settings is part of your public profile page and will be publicly visible to others.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Address Book Contact Information. You may choose to import your address book contacts or enter your contacts’ information manually to access certain features of the Roomlelo.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Other Information. You may otherwise choose to provide us Information when you fill in a form, conduct a search, update or add information to your Account, respond to surveys, post to community forums, participate in promotions, or use other features/ functionalities of the Site.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Information that is necessary for the payment related services Roomlelo needs to collect the following Sensitive Personal Information, as it is necessary for the adequate performance of its agreements with you and to comply with applicable law (such as anti-money laundering regulations). Without it, you will not be able to use payment services offered by Roomlelo on the Site:
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Payment Information. When you use any payment services on the Site, certain financial information may be required to facilitate the processing of such payments. You are to note that Roomlelo engages with third party payment service providers in order to enable you to process your payments in connection with the use of Roomlelo’s services. You will be required by such third-party payment service providers to provide certain Sensitive Personal Information. Please note that to this extent, you will be subject to the terms of use and privacy policy that is maintained by such third-party service provider.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Identity Verification and Other Information. In connection with the collection of payment information and processing your payments we may also require certain information using which we can verify your identity (such as images of your specified government issued identification including passport, national ID card, or driving license) or other authentication information/KYC documents, your date of birth, your address, e-mail address, phone number and other information (such as your invoice amount, e-mail id and contact number) in order to verify your identity, provide the payment services to you, and to comply with applicable law.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Sharing your information: We share your Information within Roomlelo’s group companies and with other persons, service providers and entities who help us provide services to you (e.g. accommodation provider, services partner, social community partner etc). We only share your information in accordance with the applicable law. In the interest of clarity, we share your Information for the purposes set out in this Policy, with the following categories of recipients:
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Within Roomlelo’s group of companies in relation to its business purposes; With accommodation managers/landlords of property(ies) or with tenants/ prospective tenants or occupants as the case may be to enable providing the services you request; We use a variety of third-party service providers and vendors to help us provide products and services related to Roomlelo, including curated community apps, utilities and services related to living (water, laundry, mobility etc.), and payment services. For example, service providers which assist us to: (i) verify your identity or authenticate your identification documents; (ii) verify information against that which is available on public databases; (iii) conduct background or police checks, fraud prevention, and risk assessment; (iv) perform product development, software and website maintenance and debugging; (v) allow the provision of Roomlelo services through third party platforms and software tools (e.g. through the integration with our API’s); or (vi) provide customer service, advertising, or payments services. These providers have access to your information to the extent required to perform these tasks on our behalf and are contractually bound to protect and to use it only for the purposes for which it was disclosed and consistent with this Policy.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            With persons/entities that own/ manage other applications or websites that integrate with our API or services, or those with an API or service with which we are integrated or choose to integrate in future;
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Other members of curated networks of Roomlelo tenants, users and employees if you submit content in such a forum/network, such as blog comments, social media posts, pictures or other content which are viewable by members of such curated networks.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            The general public, if you submit content in a public forum, such as blog comments, social media posts, or other features of our services that are obviously viewable by the general public. For example, you may choose to use social sharing features and related tools which let you share details pertaining to your Roomlelo experience with other applications, sites, or media, and vice versa. Your use of these features enables the sharing of Information with your friends or the public, depending on your social sharing service settings. Please refer to the privacy policies of those social sharing services for more information about how they handle the information you provide to or share through them;
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Third parties where we have a duty to or are permitted to disclose your Information by law (e.g. law enforcement officials, government authorities);
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            With the police in the exercise of their functions or with others as required by a court order;
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Third parties where we or any Roomlelo group company, sell or buy any business or assets, in which case we may disclose your Information to the prospective seller or buyer of such business or assets;
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Third parties in connection with any merger, sale of company assets, consolidation or restructuring, financing, or acquisition of all or a portion of Roomlelo or any of the Roomlelo group company’s business, in which case Information held by it you may be one of the transferred assets.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Note where we share your Sensitive Personal Information or Personally Identifiable Information, appropriate protections will be in place to protect such information as required by applicable data protection laws. Sometimes, we may share Information in an aggregated, pseudonymised and/or anonymised form which cannot reasonably be used to identify an individual.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Purposes for which we use your Information: Correspondence/communication with you pursuant to you registering an Account or your usage of the Site;<br />
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Verification of your Account;
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Ensuring that the content on the Site is presented in the most effective manner for you and for your device;
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            To provide you with newsletters, information, products or services that you request from us which we feel may interest you, where you have consented to be contacted for such purposes;
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            To notify you about changes to the Site, this Policy or the Terms of Use;
                        </Typography>

                        <br />
                        <Typography variant='subtitle2'>
                            For the purpose of studying your usage patterns;
                            </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            For analytical purposes, including but not limited to assessing usage data, usage patterns, estimate audience sizes and other similar activities;
                            </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            In any other manner we may describe when you provide the Information;
                            </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Detection and prevention of fraud, spam, abuse, security incidents, and other harmful activity;
                            </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Conducting security investigations and risk assessments;
                            </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Verification or authentication of the information or identifications provided by you (such as to verify your accommodation address or compare your identification photo to another photo you provide);
                            </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Conducting checks against databases and other information sources, including background or police checks, to the extent permitted by applicable laws and with your consent where required;
                            </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Compliance with our legal obligations and applicable laws;
                            </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Compliance and monitoring of our contractual obligations towards you;
                            </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Resolution of any disputes with you or any of our user(s) and enforce our agreements with third parties
                        {/* </Typography> */}
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            In connection with the activities above, we may conduct profiling based on your interactions with Roomlelo, your Profile information and other content you submit, and information obtained from third parties. In limited cases, automated processes may restrict or suspend access to Site, if such processes detect an activity that we think poses a safety or other risk to Roomlelo, other users, or third parties.
                             </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            By accepting this policy you agree to receive communications via WhatsApp.
                             </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            DATA SECURITY The Information that you provide, subject to disclosure in accordance with this Policy and Terms of Use, shall be maintained in a safe and secure manner. Roomlelo’s databases and Information are stored on secure servers with appropriate firewalls owned by Roomlelo or by third parties.
                             </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Roomlelo gives the user right to withdraw his consent by sending an email at <a href="mailto:contact@roomlelo.in">contact@roomlelo.in</a>
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Given the nature of internet transactions, Roomlelo does not take any responsibility for the transmission of Information including the Information you provide to Roomlelo. Any transmission of your Information on the internet is done at your risk. Roomlelo does not take any responsibility for you or any third party circumventing the privacy settings or security measures contained on the Site.
                             </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            While Roomlelo will use all reasonable efforts to ensure that your Information is safe and secure, it offers no representation, warranties or other assurances that the security measures are adequate, safe, fool proof or impenetrable.
                             </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            You acknowledge that as a registered user you are responsible for maintaining the security of your Account such as your Account login credentials and passwords, and that you should not provide these credentials to any third party. If it comes to your knowledge that or if you have reason to believe that your Account credentials have been stolen or been made known to others, you must contact us immediately at <a href="mailto:contact@roomlelo.in">contact@roomlelo.in</a> . You acknowledge that you are responsible for all acts done, using your Account login credentials. Roomlelo is not responsible if someone else accesses your Account on account of your failure to maintain security of your Account credentials.
                             </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            . Your Rights: Managing Your Information You may access and update your Personally Identifiable or Sensitive Personal Information through your Account settings. Please note that you do not have the option to connect to third party applications using your Account. Do note however, Roomlelo reserves the rights to save any Non-Personal, Device Information and usage Information and you are not entitled to seek the deletion of the same.
                             </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Roomlelo at its sole discretion may permit or deny the change of any Information, if it is believed such Information is required to comply with applicable laws.
                             </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Rectification of Inaccurate or Incomplete Information You have the right to ask us to correct inaccurate or incomplete Personally Identifiable Information or Sensitive Personal Information concerning you (and which you cannot update yourself within your Account) by contacting <a href="mailto:contact@roomlelo.in">contact@roomlelo.in</a>
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Data Retention and Erasure We retain your Information as long as it is required for it discharge its obligations towards you and/or as may be required under law. However, there may be circumstances that mean we must retain your personal information for longer (e.g. in the event of a dispute or if you make a claim in relation to a booking). We may retain some of your Personally Identifiable information as necessary for our legitimate business interests, such as fraud detection and prevention and enhancing safety. Information you have shared with others (e.g. reviews, forum postings) may continue to be publicly visible on the Site, even after your Account is cancelled.
                             </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            International Privacy Rights Roomlelos’s Sites and/or databases are operated and managed on servers that may be located and operated in different jurisdictions. By using and accessing the Site, you consent to the transfer to and processing of your Information including the Sensitive Personal Information and the Personally Identifiable Information, on servers that may be located in a jurisdiction different from where you are located, and that the protection of such Information may be different than required under the laws of your residence or location.
                             </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Age restrictions The Site is only intended for users who are competent to contract under applicable law. If you are not of the requisite age, you are not to provide any Personally Identifiable Information or Sensitive Personal Information. If it comes to Roomlelo’s attention that any such information pertains to an individual who is not competent to contract under applicable law, such Information may be deleted without notice to you.
                             </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Amendments to the Policy This Policy is subject to change at Roomlelo’s sole discretion. Any changes to the Policy will be notified by way of a notice on the home page.
                             </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Terms of Use This Policy shall form a part of the Terms of Use.
                             </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Data protection contacts: If you have any questions, comments, complaints or suggestions in relation to this Policy, or any other concerns about the way in which we process information about you, please contact our Grievance Redressal Officer (detail mentioned below) at <a href="mailto:contact@roomlelo.in">contact@roomlelo.in</a> . We shall endeavour to address all requests/complaints within thirty (30) days from the date of such a request/complaint being made.
                        </Typography>
                        <br />
                        <Typography variant='subtitle1'>
                            Grievance Redressal Officer email: <a href="mailto:contact@roomlelo.in">contact@roomlelo.in</a>
                        </Typography>
                        <br />
                        <Typography color='textSecondary' variant='subtitle2'>
                            This Policy has been last updated on 21st oct, 2020.
                        </Typography>

                    </Grid>
                </Grid>

            </Grid>
            <Footer />
        </div >
    )
};
TenantTerms.PropType = {
    sty: PropType.object.isRequired,
    book: PropType.object.isRequired,
    bookClear: PropType.func.isRequired
}
const mapState = (state) => ({

    book: state.book,
});
const mapActionsToProps = {
    bookClear
};
export default connect(mapState, mapActionsToProps)(TenantTerms)
