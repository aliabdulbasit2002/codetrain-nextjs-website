"use client";

import { createContext, useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
import SuccessStory from "@/components/SuccessStory";
import BgLogoLeft from "@/public/icons/BgLogoLeft";
import BgLogoRight from "@/public/icons/BgLogoRight";
import CTLogo from "@/public/icons/CTLogo";
import Link from "next/link";
import {
  faq,
  whyCodetrain,
  applicationProcess,
  accept,
} from "@/constants/constants";

const UIUXDesign = () => {
  const Context = createContext();
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="text-textColor overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-64px)] bg-ash grid grid-cols-2 place-items-center">
        <div className="p-8 text-textColor leading-8 col-span-2 lg:col-span-1">
          <h2 className="text-4xl text-violet font-bold max-w-lg ">
            Develop Your UI/UX Design Skills with Us
          </h2>
          <p className="my-8">
            Our UI/UX Design course is your path to mastering the art of
            user-centered design. From beginners to advanced learners, our
            program equips you with the skills to create impactful and
            user-friendly designs.
          </p>
          <div className="flex gap-x-4 mt-14 z-10">
            <Link
              href="https://codetrainafrica.heiapply.com/application"
              target="_blank"
            >
              <Button className="bg-yellow text-violet shadow-none font-bold px-5 sm:px-8 md:px-10 rounded-md">
                Enroll now
              </Button>
            </Link>
            <Button
              className="text-violet bg-transparent shadow-none font-bold px-5 rounded-md border-violet sm:px-8 md:px-10"
              variant="outlined"
            >
              Let&#39;s Talk
            </Button>
          </div>
          <p className="mt-12">
            * Admission is in progress, join the October Cohort!
          </p>
        </div>
        <div className="hidden lg:inline">
          <Image
            src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200"
            width={720}
            height={384}
            alt=""
            className="object-cover !h-[calc(100vh-64px)]"
          />
        </div>
        <Image
          src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt=""
          width={720}
          height={384}
          className="h-full w-full object-cover absolute opacity-20 right-0  lg:hidden"
        />
      </section>

      {/* Comprehensive Software Development Curriculum */}
      <section className="py-20 px-8">
        <div className="text-center relative z-10">
          <h3 className="text-3xl md:text-5xl text-violet font-bold">
            What You Will Learn
          </h3>
          <p className="text-textColor max-w-5xl mx-auto mt-10">
            Get ready to master UI/UX design in our intensive one-year course,
            focused on creating user-friendly and engaging experiences.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-8 py-10 bg-contain bg-center bg-no-repeat relative">
          <div className="max-w-[540px] bg-white relative z-10 sh">
            <Image
              src="https://images.pexels.com/photos/3184612/pexels-photo-3184612.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="picture"
              className="rounded-non h-full object-cover"
              width={540}
              height={440}
            />
          </div>
          <div className="relative z-10 text-textColor">
            <ul className="list-decimal space-y-2 max-w-lg">
              <li>
                <p className="font-extrabold text-lg">Foundation</p>
                <ul className="list-disc ml-3 space-y-1">
                  <li>
                    <span className="font-extrabold">
                      Introduction to Figma:
                    </span>{" "}
                    Master the fundamentals of Figma for effective design
                    collaboration.
                  </li>
                  <li>
                    <span className="font-extrabold">Project Initiation:</span>{" "}
                    Create 3-5 personal projects across various domains,
                    including SaaS, e-commerce, fintech, and landing page
                    designs.
                  </li>
                </ul>
              </li>
              <li>
                <p className="font-extrabold text-lg">Design Process Mastery</p>
                <ul className="list-disc ml-3 space-y-1">
                  <li>
                    <span className="font-extrabold">
                      Advanced Design Process:
                    </span>{" "}
                    Deepen your understanding through community involvement,
                    mood board creation, and exploration on platforms like
                    Dribbble.
                  </li>
                  <li>
                    <span className="font-extrabold">
                      Color Theory and Typography:{" "}
                    </span>
                    Develop expertise in harmonizing colors and utilizing
                    typography effectively.
                  </li>
                  <li>
                    <span className="font-extrabold">Interaction Design:</span>{" "}
                    Explore the intricacies of designing interactive and
                    engaging user experiences.
                  </li>
                  <li>
                    <span className="font-extrabold">Project Execution:</span>{" "}
                    Implement acquired skills in 3 projects, covering SaaS,
                    e-commerce, fintech, and landing page designs.
                  </li>
                </ul>
              </li>
              <li>
                <p className="font-extrabold text-lg">
                  Holistic Program Features:
                </p>
                <ul className="list-disc ml-3 space-y-1">
                  <li>
                    <span className="font-extrabold">Work Experience:</span>{" "}
                    Gain practical experience through collaborations with local
                    and international companies.
                  </li>
                  <li>
                    <span className="font-extrabold"> Applied UX: </span>
                    Emphasize user experience principles in project execution
                    and real-world scenarios.
                  </li>
                  <li>
                    <span className="font-extrabold">
                      Portfolio Development:
                    </span>
                    Build and refine a portfolio showcasing your skills and
                    achievements, focusing on UX.
                  </li>
                  <li>
                    <span className="font-extrabold">Online Presence:</span>
                    Upload projects to Behance, portfolio sites, and a personal
                    website to increase visibility.
                  </li>
                </ul>
              </li>
              <li>
                <p className="font-extrabold text-lg">
                  Career Services Support:
                </p>
                <ul className="list-disc ml-3 space-y-1">
                  <li>
                    <span className="font-extrabold">Job/Interview Prep:</span>{" "}
                    Receive comprehensive support to prepare for job
                    opportunities and interviews.
                  </li>
                  <li>
                    <span className="font-extrabold">
                      Soft Skills and Leadership Training:
                    </span>
                    Enhance your soft skills and leadership abilities to excel
                    in the workplace.
                  </li>
                  <li>
                    <span className="font-extrabold">Mentoring: </span>
                    Benefit from guidance and insights provided by Codetrain
                    alumni and industry professionals.
                  </li>
                  <li>
                    <span className="font-extrabold">
                      Workshops and Career Seminars:{" "}
                    </span>
                    Participate in workshops and seminars to expand your
                    knowledge and network.
                  </li>
                </ul>
              </li>
            </ul>
            <Button className="mt-8 bg-yellow text-violet">Get Started</Button>
          </div>
        </div>
      </section>

      {/* Codetrain Fellows section */}
      <section className="py-20 px-4 bg-ash text-center">
        <Typography variant="h3" className="text-violet">
          Meet The Codetrain Teaching Fellows
        </Typography>

        <div className="flex justify-center items-center mt-20 text-left">
          <Card className="max-w-md rounded-none">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <Image
                src="/people/joshua.jpg"
                alt="img"
                width={540}
                height={276}
                className="overflow-hidden h-[351px] object-cover object-top w-full"
              />
            </CardHeader>
            <CardBody>
              <Typography className="text-textColor">
                I’m Calvin, a UX Engineer with over 4 years of experience. My
                journey has taken me from interning at Kofa, where I designed
                user experiences for electric motorcycles, to leading design at
                a cutting-edge tech startup. I’ve had the privilege of
                collaborating with various tech startups and agencies, where
                I’ve honed my skills in ideation, storytelling, and visual
                design. I’m all about sparking curiosity and believe the best
                way to learn is by doing—so get ready for some hands-on
                learning! When I’m not deep in design, I’m exploring how people
                interact with products or getting lost in a good book.
              </Typography>
            </CardBody>
            <hr className="border-violet h-1" />
            <CardFooter>
              <Typography className="font-bold text-textColor">
                Calvin Tettey
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* What You Need To Get Accepted */}
      <section className="py-20 px-4 flex flex-col gap-20 md:flex-row justify-center">
        <div className="inline-flex flex-col justify-center gap-5">
          <Typography variant="h2" className="max-w-80 text-pink">
            What You Need To Get Accepted
          </Typography>
          <Typography variant="paragraph" className="text-textColor max-w-xs">
            Here&apos;s all you need to succeed and enjoy the full Codetrain
            experience 
          </Typography>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 lg:w-2/5 text-textColor">
          {accept.map(({ title, items }) => (
            <ul key={title} className="w-full">
              <li className="mb-3">
                <Typography variant="h4" className="font-bold text-violet">
                  {title}
                </Typography>
              </li>
              <ul className="list-disc">
                {items.map((item) => (
                  <li key={item.name} className="ml-3 sm:ml-6">
                    <Typography
                      variant="paragraph"
                      className="py-1.5 transition-colors"
                    >
                      {item.text}
                    </Typography>
                  </li>
                ))}
              </ul>
            </ul>
          ))}
        </div>
      </section>

      {/* How it works section */}
      <section className="py-20 px-4 bg-ash text-center relative">
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl text-violet font-bold">
            How It Works
          </h3>
          <p className="text-textColor max-w-4xl mx-auto mt-5">
            Our flexible class schedules adapt to your lifestyle, ensuring you
            can balance learning with your personal commitments. Here are the
            available options:
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 z-10 relative">
          <div className="max-w-xs mx-auto">
            <Image
              src="/people/class.jpg"
              width={180}
              height={180}
              alt=""
              className="object-cover mx-auto mb-5"
            />
            <Typography variant="h4" className="text-violet">
              Weekday In-Person Class
            </Typography>
            <Typography variant="paragraph" className="mt-6">
              Attend live, in-person sessions during the week for hands-on
              learning and immediate feedback. Choose a schedule that fits your
              weekday availability.
            </Typography>
          </div>
          <div className="max-w-xs mx-auto">
            <Image
              src="/people/class3.jpg"
              width={180}
              height={180}
              alt=""
              className="object-cover mx-auto mb-5"
            />
            <Typography variant="h4" className="text-violet">
              Weekend Class
            </Typography>
            <Typography variant="paragraph" className="mt-6">
              Join live, in-person sessions on weekends for flexible learning
              that fits around your weekly commitments. Ideal for balancing
              study with your personal schedule.
            </Typography>
          </div>
          <div className="max-w-xs mx-auto">
            <Image
              src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1200"
              width={180}
              height={180}
              alt=""
              className="object-cover mx-auto mb-5"
            />
            <Typography variant="h4" className="text-violet">
              Virtual Class
            </Typography>
            <Typography variant="paragraph" className="mt-6">
              Participate in live sessions online, allowing you to learn from
              anywhere. Enjoy the flexibility to join classes and access
              materials at your convenience.
            </Typography>
          </div>
        </div>
        {/* Bg Logos */}
        <BgLogoLeft className="absolute fill-pink opacity-[0.1] top-0 right-0 size-96 lg:size-[532px]" />
        <BgLogoRight className="absolute fill-pink size-28 z-20 bottom-80 lg:top-56 sm:left-40 md:left-10 lg:left-10 xl:left-16" />
      </section>

      {/* Steps In The Application Process */}
      <section className="py-20 px-4 relative">
        <div className="relative z-10 text-center">
          <h3 className="text-3xl md:text-5xl text-violet font-bold">
            Steps In The Application Process
          </h3>
          <p className="text-textColor max-w-4xl mx-auto mt-10">
            Our application process is streamlined to ensure a smooth experience
            with clear instructions at every stage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-24 gap-y-10 md:gap-y-28 place-items-center mt-10 justify-items-center relative z-10">
          {applicationProcess.map((process) => (
            <div
              className="max-w-md flex gap-4 md:odd:place-self-end md:even:place-self-start"
              key={process.id}
            >
              <div>
                <Typography variant="h4" className="text-pink text-8xl">
                  {process.id}
                </Typography>
              </div>
              <div>
                <Typography variant="h4" className="text-violet md:text-nowrap">
                  {process.title}
                </Typography>
                <Typography variant="paragraph" className="mt-1">
                  {process.desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>
        {/* Bg Logo */}
        <CTLogo
          className="absolute top-0 size-[1080px] md:size-full object-cover opacity-[0.5]"
          color="#ebebeb"
        />
      </section>

      {/* Why codetrain africa */}
      <section className="bg-gradient-to-l from-[#1B1049] to-[#4126AF] text-white text-center min-h-[80vh] py-20 relative">
        <h2 className="text-3xl font-bold">Why Codfetrain Africa</h2>
        <Typography
          variant="paragraph"
          className="max-w-5xl mx-auto mt-10 text-base"
        >
          Every aspect of the Codetrain experience is designed to ensure your
          success. The training you receive is built on pillars that guarantee
          your professional growth.
        </Typography>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-20 justify-items-center">
          {whyCodetrain.map((el) => (
            <div
              className="max-w-80 md:odd:place-self-end md:even:place-self-start"
              key={el.title}
            >
              <Typography variant="h4" className="text-violet text-nowrap">
                {el.title}
              </Typography>
              <Typography variant="paragraph" className="mt-4 text-base">
                {el.desc}
              </Typography>
            </div>
          ))}
        </div>
        {/* Bg Logo */}
        <CTLogo
          className="absolute top-0 sm:top-20 size-[1080px] -left-[48rem] sm:-left-[20rem] md:size-[80%] object-cover opacity-[0.1]"
          color="#fcfffd"
        />
      </section>

      {/* Job Opportunitys Section*/}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="text-center relative z-10 max-w-4xl mx-auto">
          <h3 className="text-3xl mx-auto md:text-5xl text-violet font-bold">
            Careers as a UI/UX Designer
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-8 py-10 bg-contain bg-center bg-no-repeat relative">
          <div className="max-w-[540px] bg-white relative z-10 shadow-md">
            <Image
              src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="picture"
              className="!h-full md:h-[540px] w-[540px] rounded-none"
              width={540}
              height={540}
            />
          </div>
          <div className="relative z-10 text-textColor">
            <div className="text-base">
              <div>
                <Typography variant="h5" className="font-bold mt-6 text-violet">
                  Coding Opportunities in UI/UX Designer
                </Typography>
                <ul className="list-disc leading-10 ml-8">
                  <li>Mobile App Developer</li>
                  <li>Frontend Developer</li>
                  <li>Backend Developer</li>
                  <li>Fullstack Developer</li>
                  <li>DevOps Engineer</li>
                  <li>Data Scientist</li>
                  <li>Automated Testing Engineer</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-x-4 mt-7">
              <Link
                href="https://codetrainafrica.heiapply.com/application"
                target="_blank"
              >
                <Button
                  className="bg-violet shadow-none font-bold px-5 sm:px-8 md:px-10 rounded-md"
                  variant="filled"
                >
                  Enroll now
                </Button>
              </Link>
              <Button
                className="text-violet bg-transparent shadow-none font-bold px-5 rounded-md border-violet sm:px-8 md:px-10"
                variant="outlined"
              >
                Let’s Talk
              </Button>
            </div>
          </div>
        </div>
        {/* Bg logo */}
        <CTLogo
          className="absolute opacity-[0.5] h-full md:max-w-7xl top-0 md:-right-[450px]"
          color="#c2c0c0"
        />
        <BgLogoLeft className="absolute hidden md:inline size-80 top-96 right-0" />
      </section>

      {/* What You’ll Learn At Codetrain Africa */}
      <section className="min-h-[calc(100vh-60px)] bg-ash text-center flex flex-col justify-center py-24 px-4 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="font-bold text-indigo text-3xl lg:text-5xl">
            What You’ll Learn At Codetrain Africa
          </h1>
          <p className="my-10 max-w-3xl mx-auto">
            Get hands-on with UI/UX design principles and real-world projects to
            build a strong portfolio, while receiving career coaching to guide
            you toward a successful future.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-10 justify-center relative z-10">
          <div className="flex flex-col gap-20 md:flex-row justify-center items-center">
            <div className="text-start bg-white shadow-xl max-w-2xl relative grid place-content-center pb-8">
              <h3 className="text-white font-bold text-2xl bg-indigo p-4">
                Course Length : 1 year
              </h3>
              <p className="mt-4 text-textColor text-lg px-4">
                Schedule <br /> Twice a week
              </p>
              <p className="text-textColor text-lg p-4">
                <span className="font-bold">Tuition Upfront Tuition: </span>Pay
                the full tuition amount prior to starting the program. Total
                cost under the Upfront Plan is GHS 19,000.
              </p>
              <p className="text-textColor text-lg p-4 pb-10">
                <span className="font-bold">Payment Plan:</span> Start with an
                initial payment of GHS10,000, and pay the rest in monthly
                installments.
              </p>
            </div>
          </div>
        </div>

        {/* Bg icons */}
        <BgLogoLeft className="absolute size-[570px] fill-indigo opacity-[0.2] -top-24 sm:top-0 right-0 md:right-32" />
        <BgLogoLeft className="absolute size-80 fill-indigo -bottom-24 sm:bottom-0 left-0 md:left-32" />
      </section>

      {/* Program Summary Section*/}
      <section className="py-20 px-4">
        <div className="text-center relative z-10 max-w-4xl mx-auto">
          <h3 className="text-3xl mx-auto md:text-5xl text-violet font-bold">
            Program Summary
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-8 py-10 bg-contain bg-center bg-no-repeat relative">
          <div className="max-w-[540px] relative z-10">
            <Image
              src="https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="picture"
              className="h-[440px] rounded-none object-cover"
              width={540}
              height={540}
            />
          </div>
          <div className="relative z-10 text-textColor">
            <div className="text-base">
              <div className="max-w-md">
                <Typography variant="paragraph" className="font-bold">
                  Course Length
                </Typography>
                <Typography variant="paragraph">1 year</Typography>
                <Typography className="font-bold mt-4">Schedule:</Typography>
                <Typography variant="paragraph">Twice a week</Typography>
              </div>
              <div className="max-w-md mt-3">
                <Typography className="font-bold mt-6">Tuition:</Typography>
                <Typography>
                  <span className="font-bold">UpFront Tuition:</span> Pay the
                  full tuition amount prior to starting the program. Total cost
                  under the Upfront Plan is GHS 19,000.
                </Typography>
              </div>
              <div className="max-w-md mt-3">
                <Typography>
                  <span className="font-bold">Payment Plan:</span> Start with an
                  initial payment of GHS10,000, and pay the rest in monthly
                  installments.
                </Typography>
              </div>
              <div className="max-w-md mt-20">
                <Typography>
                  <span className="font-bold">ISA:</span> Start with zero
                  deposit and pay your tuition only after landing a job.
                </Typography>
              </div>
            </div>

            <div className="flex gap-x-4 mt-7">
              <Button
                className="bg-violet shadow-none font-bold px-5 sm:px-8 md:px-10 rounded-md"
                variant="filled"
              >
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 text-center bg-ash">
        <h1 className="font-bold text-violet mx-auto text-2xl md:text-3xl lg:text-5xl">
          Feqeuently Asked Question About Codetrain
        </h1>
        <p className="my-10 max-w-3xl mx-auto text-textColor">
          Have questions about our programs, fees, or anything else? Find
          answers here to help you make an informed decision.
        </p>

        <div>
          {faq.map((item, index) => (
            <Accordion
              key={index}
              open={open === index + 1}
              className="mb-2 bg-white border border-blue-gray-100 px-4 max-w-5xl mx-auto text-left"
              icon={
                open === index + 1 ? (
                  <ArrowUpIcon
                    className="w-6 h-6 text-violet"
                    onClick={() => handleOpen(index)}
                  />
                ) : (
                  <ArrowDownIcon
                    className="w-6 h-6 text-violet"
                    onClick={() => handleOpen(index)}
                  />
                )
              }
            >
              <AccordionHeader
                onClick={() => handleOpen(index + 1)}
                className={`border-b-0 transition-colors text-sm md:text-lg ${
                  open === index + 1 ? "text-violet hover:!text-violet" : ""
                }`}
              >
                {item.question}
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal text-textColor">
                {item.answer}
                <ul className="list-disc p-3 pl-10">
                  {item.options &&
                    item.options.map((el) => (
                      <li key={el.option} className="p-1">
                        {el.option}
                      </li>
                    ))}
                </ul>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </section>

      {/* Excited to start your career Section */}
      <section className="bg-violet py-24 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-30">
          <div>
            <Typography variant="h2" className="text-lightBlue max-w-md">
              Are you excited to start your career?
            </Typography>
            <Typography
              variant="paragraph"
              className="text-white max-w-xl mt-5"
            >
              Your journey to a fulfilling tech career starts here. Let`s get
              you started.
            </Typography>
          </div>
          <div className="mt-10 md:mt-0">
            <Link
              href="https://codetrainafrica.heiapply.com/application"
              target="_blank"
            >
              <Button variant="filled" className="bg-lightBlue">
                Enroll Now
              </Button>
            </Link>
          </div>
        </div>
        <BgLogoLeft className="absolute fill-yellow opacity-[0.5] size-80 md:size-[443px] -top-14 md:-top-7 p-0 left-0" />
        <BgLogoRight className="absolute fill-yellow size-52 md:size-80 -bottom-10 md:bottom-0 right-0" />
      </section>
    </section>
  );
};
export default UIUXDesign;