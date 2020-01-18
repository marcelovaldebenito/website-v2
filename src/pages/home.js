import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';
import Layout from '../global/Layout';
import Image from '../components/Image';
import Credentials from '../components/Credentials';
import Alumni from '../components/Alumni';
import TestCom from '../components/testCom';
// import Test from '../components/Test';
import Mentors from '../components/Mentors';
import WhoIsHiring from '../components/WhoIsHiring'
import Footer from '../components/Footer'
import {Spring} from '../components/spring'
import ReactPlayer from 'react-player'
import Icon from '../components/Icon'
import PricesAndPayment from '../components/PricesAndPayment';
import QueryTest from '../components/QueryTest';
import Why4Geeks from '../components/Why4Geeks';
import Locations from '../components/Locations';
import Jobs from '../components/Jobs';
import '../assets/css/style.scss'
import Link from 'gatsby-link'
import {H1, H2, H5, Title, Separator, Paragraph, Span} from '../components/Heading'
import {Container, Row, Column, Divider} from '../components/Sections'
import {RoundImage, Colors} from '../components/Styling'
import {ThumbsUpIcon, ArrowRightIcon} from 'react-line-awesome'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserFriends, faGlasses, faClock, faChalkboardTeacher, faCommentAlt} from '@fortawesome/free-solid-svg-icons'
const Home = ({data}) => {
  console.log(data.partners.edges[0].node.partners[0].image)
  return (

    <Layout>
      <Container fluid >
        <Row>
          <Column size="1" />
          <Column size="11" >
            <Row>
              <Column size="1" />
              <Column size="5">
                <Divider height="100px" />
                <Row>
                  <H1 fontSize="13px" color={Colors.gray} lato>Miami Coding Bootcamp</H1>
                </Row>
                <Row>
                  <Separator primary />
                </Row>
                <Row>
                  <H2 primary align="left" >LEARN TO CODE<Span animated color={Colors.yellow}>_</Span></H2>
                </Row>
                <Row>
                  <H2 primary align="left" >AND GET CAREER</H2>
                </Row>
                <Row>
                  <H2 primary align="left" >SUPPORT FOR LIFE</H2>
                </Row>
                <Row>
                  <Paragraph color={Colors.gray} margin="20px 0 0 0" align="left" fontSize="13px">Join more than 500 graduates already working as coders </Paragraph>
                </Row>
                <Row>
                  <Paragraph color={Colors.gray} margin="5px 0 0 0" align="left" fontSize="13px">and become a part of one of the world's biggest coding community.</Paragraph>
                </Row>
                <Row center>
                  <Link to="/program">
                    <div className="btn text-white btn-md rounded-pill jumbo-button" role="button">CHOOSE YOUR PROGRAM </div>
                  </Link>
                </Row>
              </Column>
              <Column size="1" />
              <Column
                size="5"
                border="bottom"
                padding="20%"
                image="yes"
                url="../localImage.png"
                height="500px"
                backgroundSize="cover">
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
      <Container fluid >
        <Row>
          <Column size="1" />
          <Column size="11">
            <Row>
              <Column size="1" />
              <Column size="8">
                <QueryTest up="40px" />
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>

      <Container fluid >
        <Row>
          <Column size="1" />
          <Column size="11">
            <Row>
              <Column size="1" />
              <Column size="8">
                <Divider height="100px" />
                <Why4Geeks />
                <Divider height="100px" />
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
      <Container fluid >
        <Row>
          <Column size="1" />
          <Column size="11">
            <Row>
              <Column size="1" />
              <Column size="8">

                <Jobs />

              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
    </Layout>
  )
};
export const myQuer = graphql`
query myQueryy{
  alumni:   allAlumniYaml{
    edges{
      node{
        name
        image
        content
        title
      }
    }
  }
  partners: allPartnersYaml{
    edges{
      node{
        partners{
          name
          image
        }
      }
    }
  }
  mentors: allTeachersYaml{
    edges{
      node{
        name
        image
        last_name
        nick_name
        coding_skills
      }
    }
  }
}
`
export default Home;