import type {NextPage} from "next";

import {
  Grid,
  Heading,
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
        <Stack spacing={8}>
          <Heading fontWeight={500} size="md">
            Hey
          </Heading>
          <Text>
            I am Gonzalo Pozzo, a frontend developer and content creator from Argentina, focused on
            helping people to land their first job in IT.
          </Text>
        </Stack>

        <Stack spacing={8}>
          <Heading fontWeight={500} size="md">
            I create some content in Twitter
          </Heading>

          <Text>
            In late 2020 I decided to make twitter my main target for content creation. I grew from
            1K to 30K in ~1 year and the community expanded to other networks like Discord, YouTube
            and Twitch.
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

        <Stack spacing={8}>
          <Heading fontWeight={500} size="md">
            Also streaming on Twitch
          </Heading>

          <Text>
            Started in late 2020 and I became a Twitch partner within 6 monts. Today I stream twice
            a week for a huge community, covering some of the most important pain points when
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

        <Stack spacing={8}>
          <Heading fontWeight={500} size="md">
            Also created my startup, Pency
          </Heading>

          <Text>
            Founded Pency, a startup that grew from 0 to 30k stores in less than a year, helping
            people to make it through the COVID-19 pandemic.
          </Text>
        </Stack>

        <Stack spacing={8}>
          <Heading fontWeight={500} size="md">
            Helping people to get that job
          </Heading>

          <Text>
            Althought people do not tend to report when they get the job, numbers are still
            impressive. Since we put focus on helping people to get more engagement in their
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
      </Stack>
    </>
  );
};

export default Home;
