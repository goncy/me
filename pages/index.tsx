import type {NextPage} from "next";

import {
  Grid,
  Heading,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  Link,
} from "@chakra-ui/react";
import Head from "next/head";

import StaggeredSlideFade from "../ui/animation/StaggeredSlideFade";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gonzalo Pozzo</title>
        <meta
          content="I'm Gonzalo Pozzo, a frontend developer and content creator from Argentina, focused in helping people to land their first job in IT"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <StaggeredSlideFade spacing={16}>
        <Stack spacing={8}>
          <Heading fontWeight={500} size="md">
            Hey there
          </Heading>
          <Text>
            I am Gonzalo Pozzo, a frontend developer (working with React) and content creator from
            Argentina, focused on helping people to land their first job in IT.
          </Text>
        </Stack>

        <Stack spacing={8}>
          <Heading fontWeight={500} size="md">
            I am currently working ▲{" "}
            <Link isExternal href="https://vercel.com">
              Vercel
            </Link>
          </Heading>
          <Text>
            I joined Vercel in August 2021 as a Solution Architect. It is where I always wanted to
            work and I am really happy of working there, with an awesome team, doing awesome things
            and making every day, the web, faster.
          </Text>
        </Stack>

        <Stack spacing={8}>
          <Heading fontWeight={500} size="md">
            And creating some content in{" "}
            <Link isExternal href="https://twitter.gonzalopozzo.com">
              Twitter
            </Link>
          </Heading>

          <Text>
            In late 2020 I decided to make twitter my main target for content creation. I grew from
            1K to 30K in ~1 year and the community expanded to other networks like{" "}
            <Link isExternal href="https://discord.gonzalopozzo.com">
              Discord
            </Link>
            ,{" "}
            <Link isExternal href="https://youtube.gonzalopozzo.com">
              YouTube
            </Link>{" "}
            and{" "}
            <Link isExternal href="https://twitch.gonzalopozzo.com">
              Twitch
            </Link>
            .
          </Text>

          <Grid gap={8} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
            <Stat minWidth={24}>
              <StatLabel>Followers</StatLabel>
              <StatNumber>1K</StatNumber>
              <StatHelpText>December 2020</StatHelpText>
            </Stat>
            <Stat minWidth={24}>
              <StatLabel>Followers</StatLabel>
              <StatNumber>+30K</StatNumber>
              <StatHelpText>February 2022</StatHelpText>
            </Stat>
          </Grid>

          <Text>
            Most of the content is related to{" "}
            <Link isExternal href="https://twitter.com/goncy/status/1396093019246546947">
              learning React
            </Link>
            ,{" "}
            <Link isExternal href="https://twitter.com/goncy/status/1479807760963362818">
              web development practice resources
            </Link>
            ,{" "}
            <Link isExternal href="https://twitter.com/goncy/status/1488887527108980737">
              getting more engagement
            </Link>
            , between others.
          </Text>
        </Stack>

        <Stack spacing={8}>
          <Heading fontWeight={500} size="md">
            Also streaming on{" "}
            <Link isExternal href="https://twitch.gonzalopozzo.com">
              Twitch
            </Link>
          </Heading>

          <Text>
            Started in late 2020 and I became a Twitch partner within 6 months. I stream twice a
            week for a huge community, covering some of the most important pain points when looking
            for a first job in IT.
          </Text>

          <Grid gap={8} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
            <Stat minWidth={24}>
              <StatLabel>Argentina</StatLabel>
              <StatNumber>1</StatNumber>
              <StatHelpText>Software and game development</StatHelpText>
            </Stat>
            <Stat minWidth={24}>
              <StatLabel>Spanish</StatLabel>
              <StatNumber>2</StatNumber>
              <StatHelpText>Software and game development</StatHelpText>
            </Stat>
            <Stat minWidth={24}>
              <StatLabel>Worldwide</StatLabel>
              <StatNumber>18</StatNumber>
              <StatHelpText>Software and game development</StatHelpText>
            </Stat>
            <Stat minWidth={24}>
              <StatLabel>Viewers</StatLabel>
              <StatNumber>200</StatNumber>
              <StatHelpText>Average</StatHelpText>
            </Stat>
            <Stat minWidth={24}>
              <StatLabel>Followers</StatLabel>
              <StatNumber>+10K</StatNumber>
              <StatHelpText>42.2/hour</StatHelpText>
            </Stat>
            <Stat minWidth={24}>
              <StatLabel>Subscriptors</StatLabel>
              <StatNumber>+300</StatNumber>
              <StatHelpText>February 2022</StatHelpText>
            </Stat>
          </Grid>

          <Text>
            Topics vary from reviewing LinkedIn profiles, coding projects, interview challenges and
            preparation, learning technologies, community group talks and interviews to some of the
            most inluential people in the area, like Cassidy Williams, Belén Curcio, Dan Abramov,
            Rich Harris, Lee Robinson, Kent C Dodds, Matías Woloski and much more.
          </Text>
        </Stack>

        <Stack spacing={8}>
          <Heading fontWeight={500} size="md">
            And it then goes into{" "}
            <Link isExternal href="https://youtube.gonzalopozzo.com">
              YouTube
            </Link>
          </Heading>

          <Text>
            The most useful content from twitch goes nearly unedited to YouTube. Where the
            subscribers went from 100 to +5000 within a year.
          </Text>

          <Grid gap={8} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
            <Stat minWidth={24}>
              <StatLabel>Views</StatLabel>
              <StatNumber>100K</StatNumber>
              <StatHelpText>Last 365 days</StatHelpText>
            </Stat>
            <Stat minWidth={24}>
              <StatLabel>View time</StatLabel>
              <StatNumber>20K hours</StatNumber>
              <StatHelpText>Last 365 days</StatHelpText>
            </Stat>
            <Stat minWidth={24}>
              <StatLabel>Subscriptors</StatLabel>
              <StatNumber>+5K</StatNumber>
              <StatHelpText>Last 365 days</StatHelpText>
            </Stat>
          </Grid>

          <Text>
            ie:{" "}
            <Link isExternal href="https://www.youtube.com/watch?v=-w-P4u0x8ig">
              Mock interview with Dan abramov
            </Link>
            ,{" "}
            <Link isExternal href="https://www.youtube.com/watch?v=SG5FFwLDuSQ">
              Mock interview for JR, SSR and SR React developers with real candidates and recruiters
            </Link>
            ,{" "}
            <Link isExternal href="https://youtu.be/DgPcpte1eoA">
              How to build a cost 0 ecommerce with TypeScript, Next.js, ChakraUI and Google Sheets
            </Link>
            ,{" "}
            <Link isExternal href="https://youtu.be/Rgojq9clGh0">
              How to get a job as frontend developer
            </Link>
            ,{" "}
            <Link isExternal href="https://youtu.be/noRAYtyFilU">
              Intro to ChakraUI
            </Link>
            ,{" "}
            <Link isExternal href="https://youtu.be/k3DMgcjG61A">
              Get a job in MercadoLibre doing this challenge
            </Link>{" "}
            and{" "}
            <Link isExternal href="https://www.youtube.com/channel/UCCvaRcYdZCZBrBQVnsUBg5Q">
              many more
            </Link>
            .
          </Text>
        </Stack>

        <Stack spacing={8}>
          <Heading fontWeight={500} size="md">
            Also created my first startup,{" "}
            <Link isExternal href="https://pency.app">
              Pency
            </Link>
          </Heading>

          <Text>
            Founded Pency, a startup that grew from 0 to 30k stores in less than a year, helping
            people to make it through the COVID-19 pandemic.
          </Text>

          <Grid gap={8} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
            <Stat minWidth={24}>
              <StatLabel>Stores</StatLabel>
              <StatNumber>3</StatNumber>
              <StatHelpText>May 2020</StatHelpText>
            </Stat>
            <Stat minWidth={24}>
              <StatLabel>Stores</StatLabel>
              <StatNumber>350</StatNumber>
              <StatHelpText>June 2020</StatHelpText>
            </Stat>
            <Stat minWidth={24}>
              <StatLabel>Stores</StatLabel>
              <StatNumber>1.6K</StatNumber>
              <StatHelpText>August 2020</StatHelpText>
            </Stat>
            <Stat minWidth={24}>
              <StatLabel>Stores</StatLabel>
              <StatNumber>5K</StatNumber>
              <StatHelpText>November 2020</StatHelpText>
            </Stat>
            <Stat minWidth={24}>
              <StatLabel>Stores</StatLabel>
              <StatNumber>30K</StatNumber>
              <StatHelpText>May 2021</StatHelpText>
            </Stat>
          </Grid>

          <Text>
            Pency let people transitioning from a physical store to an online store, easily and
            free, within a day and no credit cards required. We received several messages and
            testimonials from people saying that Pency saved their stores from going bankrupt.
          </Text>
        </Stack>

        <Stack spacing={8}>
          <Heading fontWeight={500} size="md">
            I am helping people to get that job
          </Heading>

          <Text>
            Althought people do not tend to report when they get the job, numbers are still
            impressive. Since I put focus on helping people to get more engagement in their learning
            process the hires doubled in one month.
          </Text>

          <Grid gap={8} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
            <Stat minWidth={24}>
              <StatLabel>Hired people</StatLabel>
              <StatNumber>6</StatNumber>
              <StatHelpText>December 2021</StatHelpText>
            </Stat>
            <Stat minWidth={24}>
              <StatLabel>Hired people</StatLabel>
              <StatNumber>6</StatNumber>
              <StatHelpText>January 2022</StatHelpText>
            </Stat>
            <Stat minWidth={24}>
              <StatLabel>Hired people</StatLabel>
              <StatNumber>15</StatNumber>
              <StatHelpText>February 2022</StatHelpText>
            </Stat>
          </Grid>
        </Stack>

        <Stack spacing={8}>
          <Heading fontWeight={500} size="md">
            To achieve it, I have to befriend companies
          </Heading>

          <Text>
            In the last year I contacted several companies, asked them their frontend developer
            position coding challenge and offered them to solve it live. People can then apply to
            get a job in that company doing the same challenge. At first sight that does not seem a
            good idea, but, in fact it is.
          </Text>

          <Grid gap={8} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
            <Stat minWidth={24}>
              <StatLabel>Majorkey</StatLabel>
              <StatNumber>15</StatNumber>
              <StatHelpText>hires</StatHelpText>
            </Stat>
            <Stat minWidth={24}>
              <StatLabel>Enviopack</StatLabel>
              <StatNumber>4</StatNumber>
              <StatHelpText>hires</StatHelpText>
            </Stat>
            <Stat minWidth={24}>
              <StatLabel>Aerolab</StatLabel>
              <StatNumber>3</StatNumber>
              <StatHelpText>hires</StatHelpText>
            </Stat>
          </Grid>

          <Text>
            And much more, companies involved in this kind of streams includes{" "}
            <Link isExternal href="https://basement.studio/">
              Basement Studio
            </Link>
            ,
            <Link isExternal href="https://aerolab.co/">
              Aerolab
            </Link>
            ,{" "}
            <Link isExternal href="https://www.majorkeytech.com/">
              MajorKey
            </Link>
            ,{" "}
            <Link isExternal href="https://www.cognizantsoftvision.com/">
              Cognizant Softvision
            </Link>
            ,{" "}
            <Link isExternal href="https://innovid.com">
              Innovid
            </Link>
            ,{" "}
            <Link isExternal href="https://www.real-trends.com/">
              Realtrends
            </Link>
            ,{" "}
            <Link isExternal href="https://blackbox-vision.tech/">
              Blackbox Vision
            </Link>
            ,{" "}
            <Link isExternal href="https://coderio.co/">
              Coderio
            </Link>{" "}
            and I have +10 companies ready for new challenges.
          </Text>

          <Text>
            Companies with entire recruiting teams assigned to positions triplicated applicances
            within three days from the stream than the ones sourced by their own teams.
          </Text>
        </Stack>

        <Stack spacing={8}>
          <Heading fontWeight={500} size="md">
            Some of that companies are sponsors in the stream
          </Heading>

          <Text>
            In the last few months, companies like Platzi, Talently, Enviopack, Workana, Indie build
            and more started sponsoring the stream with prizes and money to keep content free for
            users.
          </Text>

          <Grid gap={8} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
            <Stat minWidth={24}>
              <StatLabel>Prizes</StatLabel>
              <StatNumber>+1K USD</StatNumber>
              <StatHelpText>per month</StatHelpText>
            </Stat>
            <Stat minWidth={24}>
              <StatLabel>Winners</StatLabel>
              <StatNumber>+200</StatNumber>
              <StatHelpText>from 11 countries</StatHelpText>
            </Stat>
            <Stat minWidth={24}>
              <StatLabel>Participants</StatLabel>
              <StatNumber>+20K</StatNumber>
              <StatHelpText>within a year</StatHelpText>
            </Stat>
          </Grid>
        </Stack>
      </StaggeredSlideFade>
    </>
  );
};

export default Home;
