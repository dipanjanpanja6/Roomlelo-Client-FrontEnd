import React, { useEffect } from "react";
import { Grid, makeStyles, Typography, Toolbar, Divider, Chip } from '@material-ui/core'

import PropType from 'prop-types'
import Footer from "../components/footer";
import Alert from '@material-ui/lab/Alert';


const style = makeStyles((theme) => ({
    book: {
        border: `solid ${theme.palette.background.paper} 20px`,
        padding: 34,
        backgroundColor: theme.palette.primary.main,
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
const TermsOfUse = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Terms of Use | RoomLelo'
    }, [])
    const sty = style()

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Toolbar />
            <Grid container style={{ flexGrow: 1 }}>
                <Grid container item sm={4} className={sty.book}>
                    <Grid container justify='center' alignItems='center' style={{ flexDirection: 'column', }}>
                        <Typography variant="h4" className={sty.topic}>
                            Terms of Use
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
                            <b>Terms of Use</b>
                        </Typography>
                        <Chip color='primary' label='TENANT' />
                        <br /><br />
                        <Typography variant='subtitle2'>
                            RLL Technology Private Limited (hereinafter referred to as “RoomLelo”) is concerned about the usage by its users (hereinafter referred to as “USER”), of its Website (“Website”) located at <a href="https://www.roomlelo.in" >https://www.roomlelo.in</a> and has provided this Terms of Use statement (hereinafter referred to as “TOU”) to familiarize the User with it.
                        </Typography>
                        <br />
                        <Typography variant='body2' color='textSecondary' style={{ paddingBottom: 10, paddingTop: 20 }}>
                            <b>Acceptance of Terms</b>
                        </Typography>
                        <Typography variant='subtitle2'>
                            The services that Roomlelo provides to User are subject to the following TOU. Roomlelo reserves the right to update the TOU at any time without notice to User(s).                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            A. This Agreement, which incorporates by reference other provisions applicable to use of Website, including, but not limited to, terms and conditions set forth hereof governing the use of certain specific material contained in Website, sets forth the terms and conditions that apply to use of the Website by User. By using Roomlelo’s Website and Services it offers including download areas, communication forums and services (Collectively “Services”), User agrees to comply with all of the terms and conditions hereof. The right to use the Website is personal to User and is not transferable to any other person or entity. User is responsible for all use of User’s Account (under any screen name or password) and for ensuring that all use of User’s Account complies fully with the provisions of this Agreement. User shall be responsible for protecting the confidentiality of User’s password(s), if any.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            B. Roomlelo shall have the right at any time to change or discontinue any aspect or feature of the Website, including, but not limited to, content, hours of availability, and equipment needed for access or use.
                        </Typography>
                        <br />
                        <Typography variant='body2' color='textSecondary' style={{ paddingBottom: 10, paddingTop: 20 }}>
                            <b>Changed Terms</b>
                        </Typography>
                        <Typography variant='subtitle2'>
                            Roomlelo shall have the right at any time to change or modify the terms and conditions applicable to User’s use of the Website, or any part thereof, or to impose new conditions, including, but not limited to, adding fees and charges for use. Such changes, modifications, additions or deletions shall be effective immediately upon notice thereof, which may be given by means including, but not limited to, posting on Website, or by electronic or conventional mail, or by any other means by which User obtains notice thereof. Any use of Website by User after such notice shall be deemed to constitute acceptance by User of such changes, modifications or additions.                        </Typography>
                        <br />
                        <Typography variant='body2' color='textSecondary' style={{ paddingBottom: 10, paddingTop: 20 }}>
                            <b>Description of Services</b>
                        </Typography>
                        <Typography variant='subtitle2'>
                            Through its Website, Roomlelo provides User with access to variety of resources, and services such as listing the User’s property for the purpose of rent/lease, posting User’s requirement for a house/property for rent/lease, preparing lease/rental agreements, collecting monthly rent, collecting security deposit etc. The services, including any updates, enhancements, new features, and/or the addition of any new Website, are subject to the TOU.
                        </Typography>
                        <br />
                        <Typography variant='body2' color='textSecondary' style={{ paddingBottom: 10, paddingTop: 20 }}>
                            <b>Description of Services</b>
                        </Typography>
                        <Typography variant='subtitle2'>
                            A. User shall use Website for lawful purposes only. User shall not post or transmit through Website any material which violates or infringes in any way upon the rights of others, which is unlawful, threatening, abusive, defamatory, invasive of privacy or publicity rights, vulgar, obscene, profane or otherwise objectionable, which encourages conduct that would constitute a criminal offence, give rise to civil liability or otherwise violate any law. Any conduct by User that in Roomlelo’s discretion restricts or inhibits any other User from using or enjoying the Website will not be permitted. User shall not use Website to advertise or perform any commercial solicitation, including, but not limited to, the solicitation of Users to become subscribers of other on-line information services competitive with Roomlelo.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            B. Website contains copyrighted material, trademarks and other proprietary information, including, but not limited to text, software, photos, videos, graphics, music and sound, and the entire contents of the Website are copyrighted as a collective work under the Trademark and Copyright laws of India. Roomlelo owns a copyright in the selection, coordination, arrangement and enhancement of such content, as well as in the content original to it. User may not modify, publish, transmit, participate in the transfer or sale, create derivative works, or in any way exploit, any of the content, in whole or in part.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            C. User shall not upload, post or otherwise make available on Website any material protected by copyright, trademark or other proprietary right without the expressive permission of the owner of the copyright, trademark or other proprietary right and the burden of determining that any material is not protected by copyright rests with User. User shall be solely liable for any damage resulting from any infringement of copyrights, proprietary rights, or any other harm resulting from such a submission.
                        </Typography>
                        <br />
                        <Typography variant='body2' color='textSecondary' style={{ paddingBottom: 10, paddingTop: 20 }}>
                            <b>Use of Services</b>
                        </Typography>
                        <Typography variant='subtitle2'>
                            The Services may contain email services, chat areas, forums, personal profile pages, photos, and/or other message or communication facilities designed to enable User to communicate with others (each a “Communication Service” and collectively “Communication Services”). User agrees to use the Communication Services only to post, send and receive messages and material that are proper and when applicable, related to the particular Communication Service. By way of example, and not as a limitation, User agrees that when using the Communication Services, User will not use the communication services for surveys, junk emails, defame, abuse, harass, stalk, threaten or otherwise violate the legal rights of others; Commit an act including, but not limited to publishing, posting, uploading inappropriate, profane, obscene photos, videos or any other material or information that is unlawful under the laws of India; Use any material or information that infringes any copyright, trademark, patent, trade secret, or other proprietary right of any party; upload files that contain viruses; advertise or offer to sell or buy any goods or services for any business purpose, unless such Communication Services specifically allows such messages; Download any file posted by another user of a Communication Service that User knows, or reasonably should know, cannot be legally reproduced, displayed, performed, and/or distributed.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Roomlelo reserves the right to review materials posted to the communication Services and to remove any material in its sole discretion. Roomlelo reserves the right to terminate User’s access to any or all of the Communication Services at any time, without notice, for any reason whatsoever. Roomlelo reserves the right at all times to disclose any information as it deems necessary to satisfy any applicable law, regulation, legal process or governmental request, or to edit, refuse to post or to remove any information or materials, in whole or in part, in Roomlelo’s sole discretion.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            Users are advised to use caution when giving out any personally identifiable information in any Communication Services. Roomlelo does not control or endorse the content, messages or information found in any Communication Services, and therefore, Roomlelo specifically disclaims any liability with regard to the Communication Services and any actions resulting from User’s participation in any Communication Services. Managers and hosts are not authorized Roomlelo spokespersons, and their views do not necessarily reflect those of Roomlelo.
                        </Typography>
                        <br />
                        <Typography variant='body2' color='textSecondary' style={{ paddingBottom: 10, paddingTop: 20 }}>
                            <b>Member Account, Password and Security</b>
                        </Typography>
                        <Typography variant='subtitle2'>
                            If any of the Services requires User to open an account, User must complete the registration process by providing Roomlelo with current, complete and accurate information as prompted by the applicable registration form. User also will choose a password and a user name. User is entirely responsible for maintaining the confidentiality of User’s password and User’s account. Furthermore, User is entirely responsible for any and all activities that occur under User’s account. User agrees to notify Roomlelo immediately of any unauthorised use of User’s account or any other breach of security. Roomlelo will not be liable for any loss that User may incur as a result of someone else using User’s password or account, either with or without User’s knowledge .However, User could be held liable for losses incurred by Roomlelo or another party due to someone else using User’s account or password. User may not use anyone else’s account at any time, without the permission of the account holder.
                        </Typography>
                        <br />
                        <Typography variant='body2' color='textSecondary' style={{ paddingBottom: 10, paddingTop: 20 }}>
                            <b>Disclaimer regarding Software, Documents and Services available on this Website</b>
                        </Typography>
                        <Typography variant='subtitle2'>
                            In no event shall Roomlelo and/or its respective suppliers shall be liable for any special, indirect or consequential damages or any damages whatsoever resulting from loss of use, data or profits, whether in an action of contract, negligence or other tortious action, arising out of or in connection with the use of performance of software, documents, provision of or failure to provide services, or information available from the services.
                        </Typography>
                        <br />
                        <Typography variant='body2' color='textSecondary' style={{ paddingBottom: 10, paddingTop: 20 }}>
                            <b>Details provided to Roomlelo or Posted at any of its Websites</b>
                        </Typography>
                        <Typography variant='subtitle2'>
                            Roomlelo does not claim ownership of the materials User provides to Roomlelo (including feedback and suggestions) or post, upload, input or submit to any Services or its associated services for review by the general public, or by the members of any public or private community (each a “Submission” and collectively ‘Submissions’). However, by posting, uploading, inputting, providing or submitting (“Posting”) User’s Submission User is granting Roomlelo and its affiliated companies permission to use User’s Submission in connection with the operation of their Internet businesses including, without limitation, the licenses rights to copy, distribute, transmit, publicly display, publicly perform, reproduce, edit, translate and reformat User’s Submission; to publish User’s name in connection with User’s Submission; and the right to sublicense such rights to any supplier of the services.
                        </Typography>
                        <br />
                        <Typography variant='body2' color='textSecondary' style={{ paddingBottom: 10, paddingTop: 20 }}>
                            <b>Disclaimer of Warranty; Limitation of Liability</b>
                        </Typography>
                        <Typography variant='subtitle2'>
                            A. User expressly agrees that use of the Website is at User’s Sole risk. Neither Roomlelo, its affiliates nor any of their respective employees, agents, third party content providers or licensors warrant that the Website will be uninterrupted or error free; Nor do they make any warranty as to the results that may be obtained from the use of the website, or, as to the accuracy, reliability or content of any information, service, or merchandise provided through the website.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            B. Website is provided on an “As is” basis without warranties of any kind, either express or implied, including, but not limited to, warranties of title or implied warranties of merchantability or fitness for a particular purpose, other than those warranties which are implied by and incapable of exclusion, restriction or modification under the laws applicable to this Agreement.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            C. This disclaimer of liability applies to any damages or injury caused by any failure of performance error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communication line failure, theft or destruction or unauthorised access to, alteration of or use of record, whether for breach of contract, tortious behaviour, negligence, or under any other cause of action. User specifically acknowledges that Roomlelo is not liable for the defamatory, offensive or illegal conduct of other users or third parties and that the risk of injury from the foregoing rests entirely with the User.
                        </Typography>
                        <br />
                        <Typography variant='subtitle2'>
                            D. In addition to the terms set forth above, Roomlelo, nor its affiliates, information providers or content partners shall be liable regardless of the cause or duration, for any errors, inaccuracies, omissions, or other defects in the information contained within the website, or for any other claims or losses arising therefrom or occasioned thereby.
                        </Typography>
                        <br />
                        <Typography variant='body2' color='textSecondary' style={{ paddingBottom: 10, paddingTop: 20 }}>
                            <b>Unsolicited Idea Submission Policy</b>
                        </Typography>
                        <Typography variant='subtitle2'>
                            Roomlelo or any of its employees do not accept or consider unsolicited ideas, including ideas for new advertising campaigns, new promotions, new products or technologies, processes, materials, marketing plans or new product names. Please do not send any original creative artwork, samples, demos or other works. The sole purpose of this policy is to avoid potential misunderstandings or disputes when Roomlelo’s products or marketing strategies might seem similar to ideas submitted to Roomlelo. If such unsolicited ideas are sent, despite our request that you should not send us your ideas, please understand that Roomlelo makes no assurances that your ideas and materials will be treated as confidential or proprietary.
                        </Typography>
                        <br />
                        <Typography variant='body2' color='textSecondary' style={{ paddingBottom: 10, paddingTop: 20 }}>
                            <b>Monitoring</b>
                        </Typography>
                        <Typography variant='subtitle2'>
                            Roomlelo shall have the right but not the obligation, to monitor the content of the website, including chat rooms and forums, to determine compliance with this agreement and any operating rules established by Roomlelo and to satisfy any law, regulation or authorised government request. Roomlelo shall have the right in its sole discretion to edit, refuse to post or remove any material submitted to or posted on Website. Without limiting the foregoing, Roomlelo shall have the right to remove any material that Roomlelo in its sole discretion, finds to be in violation of the provisions hereof or otherwise objectionable.
                        </Typography>
                        <br />
                        <Typography variant='body2' color='textSecondary' style={{ paddingBottom: 10, paddingTop: 20 }}>
                            <b>Indemnification</b>
                        </Typography>
                        <Typography variant='subtitle2'>
                            User agrees to defend, indemnify and hold harmless Roomlelo, its affiliates and their respective directors, officers, employees and agents from and against all claims and expenses, including attorney’s fees, arising out of the use of Roomlelo by user or User’s Account.
                        </Typography>
                        <br />
                        <Typography variant='body2' color='textSecondary' style={{ paddingBottom: 10, paddingTop: 20 }}>
                            <b>Termination</b>
                        </Typography>
                        <Typography variant='subtitle2'>
                            Either Roomlelo or the User may terminate this Agreement at any time. Roomlelo shall have the right to immediately terminate the User’s Account in the event of any conduct by User which Roomlelo, in its sole discretion, considers to be unacceptable, or in the event of any breach by the User of this Agreement.
                        </Typography>
                        <br />
                        <Typography variant='body2' color='textSecondary' style={{ paddingBottom: 10, paddingTop: 20 }}>
                            <b>Intellectual Property</b>
                        </Typography>
                        <Typography variant='subtitle2'>
                            All copyrights and trademarks held by Roomlelo with respect to its logos and content posted on the Website by Roomlelo etc is the exclusive intellectual property of Roomlelo and all rights are reserved on the same.
                        </Typography>
                        <br />
                        <Typography variant='body2' color='textSecondary' style={{ paddingBottom: 10, paddingTop: 20 }}>
                            <b>Miscellaneous</b>
                        </Typography>
                        <Typography variant='subtitle2'>
                            This Agreement and any operating rules for Roomlelo established by Roomlelo constitute the entire agreement of the parties with respect to the subject matter hereof, and supersede all previous written or oral agreements between the parties with respect to such subject matter. This Agreement shall be construed in accordance with the laws of India.
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
            <Footer />
        </div>
    )
};

TermsOfUse.PropType = {
    sty: PropType.object.isRequired,
}

export default (TermsOfUse)
