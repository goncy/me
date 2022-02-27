import type {NextPage} from "next";

import {
  Grid,
  Heading,
  SlideFade,
  Stack,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";

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

      <Stack spacing={16}>
        <SlideFade in transition={{enter: {duration: 0.6}}}>
          <Stack spacing={8}>
            <Heading fontWeight={500} size="md">
              Hey there
            </Heading>
            <Text>
              I am Gonzalo Pozzo, a frontend developer and content creator from Argentina, focused
              on helping people to land their first job in IT.
            </Text>
          </Stack>
        </SlideFade>

        <SlideFade in transition={{enter: {duration: 0.6, delay: 0.1}}}>
          <Stack spacing={8}>
            <Heading fontWeight={500} size="md">
              I am currently working ▲ Vercel
            </Heading>
            <Text>
              I joined Vercel in August 2021 as a Solution Architect. It is where I always wanted to
              work and I am really happy of working there, with an awesome team, doing awesome
              things and making every day, the web, faster.
            </Text>
          </Stack>
        </SlideFade>

        <SlideFade in transition={{enter: {duration: 0.6, delay: 0.2}}}>
          <Stack spacing={8}>
            <Heading fontWeight={500} size="md">
              And creating some content in Twitter
            </Heading>

            <Text>
              In late 2020 I decided to make twitter my main target for content creation. I grew
              from 1K to 30K in ~1 year and the community expanded to other networks like Discord,
              YouTube and Twitch.
            </Text>

            <Grid gap={8} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
              <Stat minWidth={24}>
                <StatLabel>Followers</StatLabel>
                <StatNumber>1K</StatNumber>
                <StatHelpText>December 2020</StatHelpText>
              </Stat>
              <Stat minWidth={24}>
                <StatLabel>Followers</StatLabel>
                <StatNumber>
                  <StatArrow type="increase" />
                  30K
                </StatNumber>
                <StatHelpText>February 2022</StatHelpText>
              </Stat>
            </Grid>
          </Stack>
        </SlideFade>

        <SlideFade in transition={{enter: {duration: 0.6, delay: 0.3}}}>
          <Stack spacing={8}>
            <Heading fontWeight={500} size="md">
              Also streaming on Twitch
            </Heading>

            <Text>
              Started in late 2020 and I became a Twitch partner within 6 months. I stream twice a
              week for a huge community, covering some of the most important pain points when
              looking for a first job in IT.
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
          </Stack>
        </SlideFade>

        <SlideFade in transition={{enter: {duration: 0.6, delay: 0.4}}}>
          <Stack spacing={8}>
            <Heading fontWeight={500} size="md">
              And it then goes into YouTube
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
          </Stack>
        </SlideFade>

        <SlideFade in transition={{enter: {duration: 0.6, delay: 0.5}}}>
          <Stack spacing={8}>
            <Heading fontWeight={500} size="md">
              Also created my first startup, Pency
            </Heading>

            <Text>
              Founded Pency, a startup that grew from 0 to 30k stores in less than a year, helping
              people to make it through the COVID-19 pandemic.
            </Text>
          </Stack>
        </SlideFade>

        <SlideFade in transition={{enter: {duration: 0.6, delay: 0.6}}}>
          <Stack spacing={8}>
            <Heading fontWeight={500} size="md">
              I am helping people to get that job
            </Heading>

            <Text>
              Althought people do not tend to report when they get the job, numbers are still
              impressive. Since I put focus on helping people to get more engagement in their
              learning process the hires doubled in one month.
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
                <StatNumber>
                  <StatArrow type="increase" />
                  15
                </StatNumber>
                <StatHelpText>February 2022</StatHelpText>
              </Stat>
            </Grid>
          </Stack>
        </SlideFade>

        <SlideFade in transition={{enter: {duration: 0.6, delay: 0.7}}}>
          <Stack spacing={8}>
            <Heading fontWeight={500} size="md">
              To achieve it, I have to befriend companies
            </Heading>

            <Text>
              In the last year I contacted several companies, asked them their frontend developer
              position coding challenge and offered them to solve it live. People can then apply to
              get a job in that company doing the same challenge. At first sight that does not seem
              a good idea, but, in fact it is.
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
              And much more, companies involved in this kind of streams includes Basement Studio,
              Aerolab, Majorkey, Cognizant Softvision, Innovid, Realtrends, Blackbox Vision, Coderio
              and I have +10 companies ready for new challenges.
            </Text>

            <Text>
              Companies with entire recruiting teams assigned to positions triplicated applicances
              within three days from the stream than the ones sourced by their own teams.
            </Text>
          </Stack>
        </SlideFade>

        <SlideFade in transition={{enter: {duration: 0.6, delay: 0.8}}}>
          <Stack spacing={8}>
            <Heading fontWeight={500} size="md">
              Some of that companies are sponsors in the stream
            </Heading>

            <Text>
              In the last few months, companies like Platzi, Talently, Enviopack, Workana, Indie
              build and more started sponsoring the stream with prizes and money to keep content
              free for users.
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
        </SlideFade>
      </Stack>
    </>
  );
};

export default Home;
