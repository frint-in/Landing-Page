import React from "react";
import "./support.scss";
import { Link } from "react-router-dom";

const TermsConditons = () => {
  return (
    <div className="TermsCondition">
      <div className="header"></div>
      <div className="globalheader">
        <div className="main-head">Terms and Conditions</div>
        <h1>Introduction</h1>
        These Terms and Conditions ("Terms") govern your use of the Frint
        internship platform ("Platform" ) and the services offered by Frint
        ("Services"). By accessing or using the Platform, you (the "Company")
        agree to be bound by these Terms. If you disagree with any part of the
        Terms, then you may not access or rescind the T&C in general.
        <h1>Services</h1>
        Frint provides a platform to connect Companies with potential interns.
        Frint assesses intern candidates through various methods such as case
        studies, hackathons, and graphic design competitions.
        <h1> Registration Fees</h1>A one-time registration fee of INR 999
        (Rupees Nine Hundred Ninety-Nine Only) applies to Companies using the
        Platform.
        <h1>Payment Terms</h1>A one-time registration fee of INR 999 (Rupees
        Nine Hundred Ninety-Nine Only) applies to Companies using the Platform.
        <h1>Intern Matching</h1>
        Frint will provide the Company with 5 pre-assessed intern profiles based
        on the Company's requirements.
        <h1>Intern Guarantee (with Disclaimer)</h1>
        If an intern leaves the Company before completing the internship tenure
        (maximum 1 month), Frint will provide one additional intern profile at
        no additional cost. However, Frint bears no liability for interns
        choosing to terminate their internship program at any stage, as
        internships are typically at-will arrangements.
        <h1>Company Responsibilities</h1>• The Company retains full autonomy
        over its HR policies and training practices for interns placed through
        Frint. • Frint assumes no liability for any decisions or actions made by
        the Company regarding interns.
        <h1>Disclaimer of Warranties</h1>
        Frint provides the Platform and Services "as is" and "as available"
        without warranties of any kind, express or implied. Frint does not
        warrant that interns will meet all of the Company's expectations or that
        the internship will be successful.
        <h1>Limitation of Liability</h1>
        Frint shall not be liable for any direct, indirect, incidental,
        consequential, or special damages arising out of or in any way connected
        with the Company's use of the Platform or Services.
        <h1>Term and Termination</h1>
        These Terms will remain in effect until terminated by either party. You
        may terminate your use of the Platform at any time. Frint may suspend or
        terminate your access to the Platform for any reason, at any time, upon
        prior notice.
        <h1>Governing Law</h1>
        These Terms shall be governed by and construed in accordance with
        Contract Law & The Apprenticeship Act,1961, India.
        <h1> Dispute Resolution</h1>
        Any dispute arising out of or relating to these Terms will be resolved
        through mutual arrangement.
        <h1>Severability</h1>
        If any provision of these Terms is held to be invalid or unenforceable,
        such provision shall be struck and the remaining provisions shall remain
        in full force and effect.
        <h1>Waiver</h1>
        No waiver of any provision of these Terms shall be deemed a further or
        continuing waiver of such provision or any other provision.
        <h1>Entire Agreement</h1>
        These Terms constitute the entire agreement between you and Frint with
        respect to your use of the Platform and Services.
        <h1>Contact Information</h1>
        If you have any questions about these Terms, please contact Frint at
        <ul>
          <li>
            By email: <Link to="mailto:office@frint.in">office@frint.in</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsConditons;
