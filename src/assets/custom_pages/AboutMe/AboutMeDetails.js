import {NavBar} from "../../../components/NavBar";
import {BackText} from "../../../components/BackText";
import {Container, Nav} from "react-bootstrap";
import {useState} from "react";
import {HashLink} from "react-router-hash-link";
import {useNavigate} from "react-router-dom";
import {readProjectData} from "../../../components/readProjectData";

export const AboutMeDetails = () => {
    const navigate = useNavigate();
    const handlePublicationClick = (project_name, project_index, suffix) => {
        navigate(`/project/${project_name}`, {state: {project_index, suffix}});
        window.scrollTo(0, 0);
    };

    const projects = readProjectData("publications")
    const cometicProjectIndex = projects.findIndex(project => project.key === "cometic");

    return (
        <section className="aboutMeDetails">
            <Container className="content_container">
                <div className="project-details-container">
                    <div className="project-details-box">
                        <h1>FAQ</h1>
                        <br/>
                        <div id={"brief_intro"}>
                            <p>Thanks for your interest on me!</p>
                            <p>I will share more about myself in this page so that you can better understand me (latest update: 2025.1.1). It covers the following questions: </p>
                            <HashLink to="#why_do_you_choose_to_be_phd">
                                <p>“Why do I choose to be a Ph.D?”</p>
                            </HashLink>
                            <HashLink to="#describe_the_greatest_challenge">
                                <p>“Describe the greatest challenge you have encountered? How did you solve it?”</p>
                            </HashLink>
                            <HashLink to="#describe_your_ideal_supervisor">
                                <p>“Describe your ideal supervisor.”</p>
                            </HashLink>
                            <HashLink to="#what_is_your_working_style">
                                <p>“What is your working style?”</p>
                            </HashLink>
                            <HashLink to="#what_do_you_do_outside_school_and_work">
                                <p>“What do you do outside school and work?”</p>
                            </HashLink>
                            <p>If you want to know more about my research, here is some
                                <a href="https://docs.google.com/presentation/d/1qK5sr-TFRBdtJkakX6MQ8H6eWY9KmLNW/edit?usp=sharing&ouid=113727777817131814707&rtpof=true&sd=true" target="_blank"
                                   rel="noopener noreferrer">&nbsp;slides</a>
                                (latest update: 2025.2.19). I recommend downloading the file for correct visual effect.</p>
                        </div>

                        <hr className="split-line"/>

                        <div id="why_do_you_choose_to_be_phd">
                            <h2>Why do I choose to be a Ph.D?</h2>
                            <p>Long story. I believe this question can be further extended to five questions:</p>
                            <ul>
                                <HashLink to="#go_to_university">
                                    <li>“why do I choose to go to the university?”</li>
                                </HashLink>
                                <HashLink to="#work_as_designer">
                                    <li>“why do I choose to work as a designer?”</li>
                                </HashLink>
                                <HashLink to="#back_to_campus">
                                    <li>“why do I choose to go back to campus from work?”</li>
                                </HashLink>
                                <HashLink to="#choose_hci">
                                    <li>“why do I choose to HCI?”</li>
                                </HashLink>
                                <HashLink to="#choose_phd">
                                    <li>“why do I choose to be a Ph.D?”</li>
                                </HashLink>
                            </ul>
                            <p>I will answer them one by one.
                                <span style={{fontWeight: "bold"}}>Feel free to skip any parts you’re not interested in. </span>
                                Going through the entire content will give you a more comprehensive understanding of me. </p>

                            <div id="go_to_university">
                                <br/>
                                <ul>
                                    <li>Why do I choose to go to the university?</li>
                                </ul>
                                <p> In China, it is common for high school students to decide to attend university as long as their academic performance is not extremely poor. At that time (2012), I
                                    saw
                                    university as an opportunity to gain more knowledge, allowing me to better understand the world and determine the field in which I should pursue further studies.
                                    <span style={{color: "#CCCCCC"}}> (In this regard, my view of university differed from the mainstream perspectives in China. Based on my observations, there are two dominant views: one is that the major chosen in university determines one’s future career path, and the other is that the university experience is irrelevant, as future career prospects depend more on family background and social connections.)</span>
                                </p>
                                <p>When it came to choosing a university, my criteria were:</p>
                                <p>(1) It had to be one of the best universities to ensure access to excellent educational resources.</p>
                                <p>(2) By comparison, the specific major was not a particularly significant factor.</p>
                                <p>With these criteria in mind, I chose Zhejiang University and majored in agriculture with a focus on tea science. During my undergraduate, I actively pursued my goal
                                    of
                                    “understanding the world better.” I graduated with over 200 credits, taking around 25 credits per semester on average. Throughout this process, I explored courses
                                    across diverse fields such as economics, trade, and politics, and completed a minor in economics.</p>
                                <p style={{color: "#CCCCCC"}}> Interestingly, although agriculture initially seemed like a compromise due to my entrance score, it gradually became an essential
                                    foundation
                                    for my recent understanding of international relations and economic development, especially when combined with economics.</p>
                                <p>You’ll notice that most of my decisions are made from a holistic perspective, combining my personal interests with broader economic development trends to guide my
                                    choices. I believe that comes from my learning during undergraduate.</p>
                            </div>

                            <div id="work_as_designer">
                                <br/>
                                <ul>
                                    <li>Why do I choose to work as a designer?</li>
                                </ul>
                                <p> After graduation, I had to face the question of choosing a career, but I knew I wasn’t ready. A career requires specialized knowledge, while mine was largely
                                    general.
                                    Luckily, I was deeply influenced by my parents, both of whom worked in photography and design, which sparked my interest in these fields from an early age. I
                                    quickly
                                    began learning professional skills in design and video production, gradually transitioning into related work. Over the course of five years, I progressed from
                                    knowing
                                    nothing to independently completing design projects.</p>
                            </div>

                            <div id="back_to_campus">
                                <br/>
                                <ul>
                                    <li>Why do I choose to go back to campus from work?</li>
                                </ul>
                                <p>Since 2012, China's rapid economic growth has naturally fueled a growing demand for high-quality entertainment products, such as films, games, and animations. This
                                    specific demand, as well as my deep admiration for works by Studio Ghibli, DreamWorks, and Pixar, drived me to enter media and design industry. I wish to found an
                                    animation studio capable of delivering such high-quality creations.</p>
                                <p>However, by the time I entered the industry (around 2016), China’s film and media market had reached its peak, driven by an influx of capital. While I believed the
                                    quality of storytelling remains poor, the improvements in production capabilities were undeniable. At the same time, the growing demand for media products made the
                                    necessary production skills increasingly accessible, effectively lowering the entry barriers for the industry. <span style={{color: "#CCCCCC"}}>The 2022 Chinese film
                                        </span> <span style={{fontStyle: "italic", color: "#CCCCCC"}}>The Wandering Earth 2</span> <span style={{color: "#CCCCCC"}}> can be seen as a validation of these observations (if you haven’t watched it yet, I highly recommend it).</span>
                                </p>
                                <p>Recognizing these trends, I realized that without making immediate adjustments, I would be left behind in the market. As a result, I decided that returning to campus
                                    would be a better path forward. On one hand, I could connect with congenial peers to build a stronger team; on the other, I could acquire specialized knowledge to
                                    develop unique technical advantages that would set me apart in the industry.</p>
                            </div>

                            <div id="choose_hci">
                                <br/>
                                <ul>
                                    <li>Why do I choose to go back to campus from work?</li>
                                </ul>
                                <p> In 2021, I was admitted to the Academy Art and Design in Tsinghua University. Contrary to my expectations, very few people were driven by a strong passion for
                                    creating
                                    high-quality media-art. Similarly, the CG industry had shown that technically superior, high-quality work does not necessarily dominate the market. Instead, the
                                    market
                                    tends to favor lower-cost visuals that simply look flashy over expensive, hyper-realistic productions. By that time, I had to put my dream of running an animation
                                    studio on hold and begin exploring entirely new directions.</p>
                                <p> My first attempt was creating interactive media art (you can find some of my early experiments at the bottom of my homepage). During this process, I noticed two key
                                    problems:</p>
                                <p>(1) It relies heavily on individual creativity, and I found it difficult to define research methods and explore the scientific questions behind the creative process.
                                    (But it is not impossible, I will recommend
                                    <a href="https://www.milab.design/" target="_blank" rel="noopener noreferrer">
                                        &nbsp;Prof. Haipeng Mi</a>,
                                    <a href="https://www.liuguanhong.net/" target="_blank" rel="noopener noreferrer">
                                        &nbsp;Prof. Guanhong Liu</a>,
                                    <a href="https://yutianyu.design/" target="_blank" rel="noopener noreferrer">
                                        &nbsp;Dr. Tianyu Yu</a>,
                                    <a href="https://xuhaiqing830.wixsite.com/haiqing" target="_blank" rel="noopener noreferrer">
                                        &nbsp;Dr. Haiqin Xu</a>,
                                    <a href="https://space.bilibili.com/34307983" target="_blank" rel="noopener noreferrer">
                                        &nbsp;Dr. Zhihao Yao</a>, who have contributed greatly in this field.)</p>
                                <p>(2) Artworks lack necessity—there are no problems that can only be solved through an artistic creation. In contrast, the field of HCI provides clear answers to these
                                    challenges. HCI has a well-established system of scientific research methods, and each generation of interactive technology aims to reduce the effort required in
                                    human-computer interaction. These factors ultimately led me to choose HCI as the direction for my future development. <span style={{color: "#CCCCCC"}}> (Definitely creation is also an important part of HCI, and once again, I really found it difficult to do systemtic research on creation.)</span>
                                </p>
                            </div>

                            <div id="#choose_phd">
                                <br/>
                                <ul>
                                    <li>Why do I choose to be a Ph.D?</li>
                                </ul>
                                <p>Finally, back to this question.</p>
                                <p><span style={{fontWeight: 600}}>First</span>, I have a strong passion for HCI research. HCI explores how we can utilize “sensing” and “feedback” to address a wide
                                    range of challenges. This combination
                                    requires not only systematic and rigorous methodologies but also emotional sensitivity and creativity to identify problems and propose solutions. As a graduate
                                    student,
                                    I honed my ability to approach problems with structure and precision, while my career as a designer nurtured my capacity for creative thinking and empathetic
                                    understanding. This blend of skills makes HCI research a perfect match for me, and pursuing a Ph.D will allow me to further deepen my exploration in this field.</p>
                                <p><span style={{fontWeight: 600}}>Second</span>, as AI continues to advance, the HCI field is experiencing significant transformation and growth, presenting numerous
                                    intriguing challenges and opportunities that
                                    I am eager to explore and address:</p>
                                <p>(1) Enhanced sensing and AI understanding capabilities allow us to better interpret meaningful signals from users and provide effective services. For instance, in
                                    the
                                    ubiquitous computing domain, we can more effectively identify and address health issues.</p>
                                <p>(2) The development of large models has strengthened our ability to simulate social dynamics, enabling richer experimentation on decision-making. For example, in
                                    social
                                    computing, we can model group behaviors and explore the impacts of different policy choices.</p>
                                <p>(3) AI, as a novel interaction interface, presents unexplored opportunities for interaction design and raises questions about its potential impact on users. For
                                    example,
                                    we still don’t fully understand whether overreliance on AI might weaken users' decision-making abilities.</p>
                                <p><span style={{fontWeight: 600}}>Third</span>, a Ph.D at a top university, surrounded by equally talented peers, would provide me with constant challenges,
                                    constructive feedback, and inspiration from their
                                    outstanding work. I believe this dynamic environment is essential to prevent me from becoming complacent with my past achievements and to push me toward becoming a
                                    leading HCI researcher.</p>
                            </div>
                        </div>
                        <hr className="split-line"/>

                        <div id="describe_the_greatest_challenge">
                            <h2>Describe the greatest challenge you have encountered? How did you solve it?</h2>
                            <p>I think it is the latest CHI project: <a onClick={() => handlePublicationClick("cometic", cometicProjectIndex, "publications")} target="_blank"
                                                                        rel="noopener noreferrer">
                                Enhancing Smartphone Eye Tracking with Cursor-Based Interactive Implicit Calibration.</a></p>
                            <p>The challenges I faced can be summarized in three aspects:</p>
                            <p>(1) Limited time and support: This research topic was decided in early July, leaving me only two and a half months to complete it. Moreover, despite the long author
                                list, I actually received limited support and handled over 90% of the work independently.</p>
                            <p>(2) Lack of confidence in my research abilities: At that time, I didn’t have any published work. My previous research, which I had started exactly a year earlier, had
                                just undergone a major revision for IMWUT after being rejected by CHI 2024. With its outcome uncertain, I doubted my ability to complete and publish this new project
                                successfully.</p>
                            <p>(3) Paper Pressure: As I am applying for PhD programs for Fall 2025, having this work accepted would significantly improve my chances of admission. Therefore, I had to
                                ensure it was completed to a high standard.</p>
                            <p>To overcome these hurdles, I took a strategic approach:</p>
                            <p>First, I focused on understanding what makes a strong research paper. I reached out to more than 10 peers and professors for feedback on key questions related to my
                                topic, and reviewed past reviewer comments from CHI and IMWUT to identify patterns in what makes a submission compelling. This helped me map out a solid framework for
                                my research.</p>
                            <p>Second, I worked on the paper itself as early as possible. I began drafting the abstract and introduction at early August, iterating frequently to refine my ideas.
                                Staying ahead of schedule with these sections allowed me to avoid last-minute pressure and ensure that the paper was of high quality.</p>
                            <p>Finally, I leveraged my experience to tackle the technical side of the project. I had previously worked on similar platforms, so I was able to efficiently develop the
                                data collection system, keeping everything on track and within the tight timeframe.</p>
                            <p>After dedicating over 12 hours a day to the project for two and a half months, I managed to complete it on time. The paper has passed the first round of review—an
                                accomplishment that felt especially rewarding given the challenges I faced.</p>
                        </div>
                        <hr className="split-line"/>

                        <div id="describe_your_ideal_supervisor">
                            <h2>Describe your ideal supervisor.</h2>
                            <p>As a Ph.D. student, I hope my supervisor will use their expertise to guide me in shaping meaningful research topics and producing high-quality outcomes (best papers and
                                publications in high-impact journals).</p>
                            <p>Looking ahead to my future career in academia, I hope to learn from my supervisor how to effectively apply fundings, teach courses, and mentor students.</p>
                        </div>
                        <hr className="split-line"/>

                        <div id="what_is_your_working_style">
                            <h2>What is your working style?</h2>
                            <p>I prefer either working with people who genuinely care about the project or working independently. I believe that a collaborator’s initiative is crucial in the process,
                                whether driven by interest in the project or a clear need for the outcome. I don’t want the collaboration to be a process where collaborators are just following the
                                orders from the first author; instead, I hope it will be a collective effort where everyone contributes and gains something.</p>
                        </div>
                        <hr className="split-line"/>

                        <div id="what_do_you_do_outside_school_and_work">
                            <h2>What do you do outside school and work?</h2>
                            <p> During my three years at Tsinghua, I worked seven days a week and rarely had complete weekends off. The little free time I had was mostly spent watching short videos
                                (sad). However, I made sure to continue studying Japanese and French every day on Duolingo.</p>
                            <p> Before Tsinghua, I would usually dedicate one weekend day to practicing the violin in the morning and studying languages (French and Japanese) in the afternoon. The
                                other day would be more flexible, but usually consist of watching movies or playing video games.</p>
                            <p> Recently, I’ve had more time to play video games again. I've been enjoying Black Myth: Wukong and Victoria 3.</p>
                        </div>
                        <hr className="split-line"/>

                    </div>
                </div>
            </Container>
        </section>
    );

}