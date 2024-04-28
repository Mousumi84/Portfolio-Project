import './style/RightBox.css';
import ExperianceCard from './components/ExpCard';
import ProjectCard from './components/PrjCard';
import WrittingCard from './components/WrtCard';


function RightBox() {



    return (
        <div className='right'>
            <div id='main'>
                <div id='about'>
                    <p>Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an <span>advertising agency</span>, a <span>start-up</span>, a <span>huge corporation</span>, and a <span>digital product studio</span>.</p>
                    <br />
                    <p>My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an <span>online video course</span> that covers everything you need to know to build a web app with the Spotify API.</p>
                    <br />
                    <p>When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for <span>Korok seeds</span>.</p>
                </div>

                <div id='cardbox'>
                    <div id='experiance'>
                        <ExperianceCard nm="sfea"
                        date={"2024 — PRESENT"}
                        head={"Senior Frontend Engineer, Accessibility · Klaviyo"}
                        details={"Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."}
                        chips={["JavaScript", "TypeScript", "React", "Storybook"]} />

                        <ExperianceCard nm="le"
                        date="2018 — 2024"
                        head="Lead Engineer · Upstatement"
                        role="Senior Engineer"
                        details="Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools."
                        chips={["JavaScript", "TypeScript", "HTML &SCSS","React","Next.js", "React Native","WordPress", "Contentful", "Node.js", "PHP" ]} /> 

                        <ExperianceCard nm="UIec"
                        date="JULY — DEC 2017"
                        head="UI Engineer Co-op · Apple"
                        details="Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback."
                        links={["MusicKit.js", "9to5Mac", "The Verge"]}
                        chips={["Ember", "SCSS", "JavaScript", "MusicKit.js"]} /> 
                        
                        <ExperianceCard nm="d"
                        date="2016 — 2017"
                        head="Developer · Scout Studio"
                        details="Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community."
                        chips={["Jekyll", "SCSS", "JavaScript", "WordPress"]} /> 
                        
                        <ExperianceCard nm="sec"
                        date="JULY — DEC 2016"
                        head="Software Engineer Co-op · Starry"
                        details="Worked with the UI team to engineer and improve major features of Starry’s customer-facing Android app."
                        links={["Android App", "ScreenTime 2.0"]}
                        chips={["Cordova", "Backbone","JavaScript","CSS"]} /> 
                        
                        <ExperianceCard nm="ctc"
                        date="JULY — DEC 2015"
                        head="Creative Technologist Co-op · MullenLowe U.S."
                        details="Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more."
                        chips={["HTML", "CSS", "JavaScript", "jQuery"]} /> 
                    </div>

                    <div id='project'>
                        <ProjectCard nm="bsca"
                        img="https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=256&q=75"
                        head="Build a Spotify Connected App"
                        details="Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more." />
                        
                        <ProjectCard nm="sp"
                        img="https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&w=256&q=75"
                        head="Spotify Profile"
                        details="Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
                        rate="618"
                        chips={["React", "Express", "Spotify API", "Heroku"]}
                         />
                         
                         <ProjectCard nm="b"
                         img="https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&w=256&q=75"
                         head="brittanychiang.com (v4)"
                         details="An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks"
                         rate="7,165"
                         chips={["Gatsby", "Styled Components", "Netlify"]}
                          />
                    </div>

                    <div id='writting'>
                        <WrittingCard nm="iaswm"
                        img="https://brittanychiang.com/_next/image?url=%2Fimages%2Fwriting%2Falgolia-search.jpeg&w=256&q=75"
                        year="2020"
                        head="Integrating Algolia Search with WordPress Multisite" />
                        
                        <WrittingCard nm="bhmacmsfs"
                        img="https://brittanychiang.com/_next/image?url=%2Fimages%2Fwriting%2Fheadless.jpeg&w=256&q=75"
                        year="2019"
                        head="Building a Headless Mobile App CMS From Scratch" />
                    </div>


                </div>
            </div>
            <footer>
                <div id='end'>
                    <p>Loosely designed in <span>Figma</span> and coded in <span>Visual Studio Code</span> by yours truly. Built with <span>Next.js</span> and <span>Tailwind CSS</span>, deployed with <span>Vercel</span>. All text is set in the <span>Inter</span> typeface.</p>
                </div>

                <div id='pop'>
                   hii
                    </div>
            </footer>
        </div>
    )

}

export default RightBox;
