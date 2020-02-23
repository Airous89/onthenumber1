import _ from 'lodash'
import React from 'react'

import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Table
} from 'semantic-ui-react'

const FixedMenuLayout = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' style={{ marginRight: '1.5em' }} />
          Project Name
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>

        <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>On The Number: Champions League's Winner and Finalist</Header>
      <p>Offence wins you championship while defence can only carry so far </p>
      <p>
      Through the history of the champions league, the teams that have gone to win the coveted event have often had the best player, 
      often, multiple players ranked as one of the best in the world. Great teams have had also had great coaches that ran their 
      teams with an efficient speed and mind. But what about the stats? 
      Often pundits talk about how one teams superiority can be based on the manager or the tactics. But how much of that is true. Taking statists from each 
      champion’s league final from 09-19 which also include final and finalist, the results show that it’s not always the pundits are right. 
      </p>

      <Header as='h2'>Defense does not always win you championships</Header>

      <p>
      The idiom, defense wins you championships has always been something that people and sport media alike peaches from the top of the mountain. 
      People look toward the Steel Current of the Pittsburg Steelers, or the Bad Boys’ Pistons of the late 1980’s as example of a great defense winning some of sport’s grandest prizes. 
      However, in the case of the champion’s league, defenses can only get you so far.  Of the 20 finalist and winners that played in the champion’s league from 2009 to 2019, 
      only two team won the competition with a goal average against below that of the opponent, 2010’s Inter Milan and 2016’s Real Madrid with 0.28 and 0.45 respectively.  
      Both teams conceded the lowest amounts of goal in their respective years for competing with six and nine goals respectively. 
      </p>

      <p>
      Their opponents, Bayern Munich in 2010 and Atletico Madrid in 2016 also came into their respective finals conceding at a ration of 1.15 g/a and 0.59 g/a but also had some of the lowest scoring offences of the finalist with 0.23 goals for in Bayern’s case and 0.19 in Atletico’s case, meaning that their teams had less scoring chances. 
      In comparison, 8 other teams had won the champions league in that time span had goals going into their net an average of 0.89 times but had goal scoring records ratios that were around 0.35 times, mean for every shot that they would take, there was a 2/5th chance that they would score .
      </p>

      <Header as='h2'>You need 6 players in the top 25 in minutes played in order to get to the finals </Header>

      <p>
      In order get to the finals, it helps to have your best player constantly play the largest number of minutes through tournament play. In the 10 years since 2009, the winner of the champion’s league has had on average, around 8 players on their squad registers on the top 25 in minutes played and appearances. 2010’s Inter, 2011’s Barcelona, 2017’s and 18’s Real all had 8 or more player registered in the top 25 in minutes played. The only team with about 8 players to register in the top 25 and not win was 2013’s BVB with 8 players making the list. 
      The team with the lowest number of players to make it to the finals was 2011’s Manchester United with only 2 players In Michael Carrick and Edwin Van Der Sar cracking the top 25, which paled in comparison to nine that Barca had.
      </p>

      <Header as='h2'>The 2012 final was an evenly matched affair between two teams </Header>

      <p>
      The 2012 Champion’s league final was a billed between two teams that were going through two very different season. 
      Bayern were on their way to winning a historic treble while their opponent and eventual winners, Chelsea of England were going through one of the roughest seasons they would see at the time, finishing 6th in league, two positions away from qualifying for the next year’s event. The finals were Bayern’s to take 
      but the stats leading up to the match tell that both teams were evenly matched.
      </p>

      <p>
      Both teams when it came to shots on target throughout the tournament had almost the same score. 91 for Chelsea to the 93 for Bayern. 
      The goal they score were also almost dead even with Chelsea scoring only one goal more than Bayern at 27 goals. Both teams also had a goal to shot on target ration of 0.27, 
      suggesting that despite the English giant’s woes domestically, on the European front, they were on par with the German Champions. 
      </p>

      <p>
      On the number of players that where in the top 25 for both team, 
      Bayern only had one more player make the list with seven in all to Chelsea. Regarding the defense, both sides where almost even with shot on goal against them at ration of 0.88 in comparison to Bayern’s 0.80 shots against them. 
      Both teams also had about the same clean sheet record at 38.5 percent of all there games played in the champion’s league 
      </p>

      <Header as= "h2">Full Table</Header>
    </Container>

      <Table columns={5}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Club</Table.HeaderCell>
            <Table.HeaderCell>Year</Table.HeaderCell>
            <Table.HeaderCell>Shot on Target</Table.HeaderCell>
            <Table.HeaderCell>Goals</Table.HeaderCell>
            <Table.HeaderCell>Goal/SOT</Table.HeaderCell>
            <Table.HeaderCell>Avg Players T25</Table.HeaderCell>
            <Table.HeaderCell>Starts T25</Table.HeaderCell>
            <Table.HeaderCell>Number of Players</Table.HeaderCell>
            <Table.HeaderCell>Goals Against</Table.HeaderCell>
            <Table.HeaderCell>Goals Conceded Ratio</Table.HeaderCell>
            <Table.HeaderCell>Shot on Target Against</Table.HeaderCell>
            <Table.HeaderCell>Clean Sheet</Table.HeaderCell>
            <Table.HeaderCell>Clean Sheet Percentage</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Barcelona</Table.Cell>
            <Table.Cell>2009</Table.Cell>
            <Table.Cell>84</Table.Cell>
            <Table.Cell>31</Table.Cell>
            <Table.Cell>0.35</Table.Cell>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>23</Table.Cell>
            <Table.Cell>13</Table.Cell>
            <Table.Cell>1.00</Table.Cell>
            <Table.Cell>37</Table.Cell>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>30.8</Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>Manchester United</Table.Cell>
            <Table.Cell>2009</Table.Cell>
            <Table.Cell>88</Table.Cell>
            <Table.Cell>18</Table.Cell>
            <Table.Cell>0.80</Table.Cell>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>24</Table.Cell>
            <Table.Cell>8</Table.Cell>
            <Table.Cell>0.62</Table.Cell>
            <Table.Cell>48</Table.Cell>
            <Table.Cell>8</Table.Cell>
            <Table.Cell>61.5</Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>Inter Milan</Table.Cell>
            <Table.Cell>2010</Table.Cell>
            <Table.Cell>61</Table.Cell>
            <Table.Cell>17</Table.Cell>
            <Table.Cell>0.28</Table.Cell>
            <Table.Cell>9</Table.Cell>
            <Table.Cell>9</Table.Cell>
            <Table.Cell>23</Table.Cell>
            <Table.Cell>9</Table.Cell>
            <Table.Cell>0.69</Table.Cell>
            <Table.Cell>49</Table.Cell>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>46.2</Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>Bayern Munich</Table.Cell>
            <Table.Cell>2010</Table.Cell>
            <Table.Cell>78</Table.Cell>
            <Table.Cell>20</Table.Cell>
            <Table.Cell>0.23</Table.Cell>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>22</Table.Cell>
            <Table.Cell>15</Table.Cell>
            <Table.Cell>1.15</Table.Cell>
            <Table.Cell>54</Table.Cell>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>38.5</Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>Barcelona</Table.Cell>
            <Table.Cell>2011</Table.Cell>
            <Table.Cell>98</Table.Cell>
            <Table.Cell>30</Table.Cell>
            <Table.Cell>0.29</Table.Cell>
            <Table.Cell>9</Table.Cell>
            <Table.Cell>9</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>9</Table.Cell>
            <Table.Cell>0.69</Table.Cell>
            <Table.Cell>37</Table.Cell>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>38.5</Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>Manchester United</Table.Cell>
            <Table.Cell>2011</Table.Cell>
            <Table.Cell>68</Table.Cell>
            <Table.Cell>18</Table.Cell>
            <Table.Cell>0.25</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>28</Table.Cell>
            <Table.Cell>7</Table.Cell>
            <Table.Cell>0.54</Table.Cell>
            <Table.Cell>55</Table.Cell>
            <Table.Cell>8</Table.Cell>
            <Table.Cell>61.5</Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>Bayern Munich</Table.Cell>
            <Table.Cell>2012</Table.Cell>
            <Table.Cell>93</Table.Cell>
            <Table.Cell>26</Table.Cell>
            <Table.Cell>0.27</Table.Cell>
            <Table.Cell>7</Table.Cell>
            <Table.Cell>7</Table.Cell>
            <Table.Cell>21</Table.Cell>
            <Table.Cell>11</Table.Cell>
            <Table.Cell>0.80</Table.Cell>
            <Table.Cell>40</Table.Cell>
            <Table.Cell>35</Table.Cell>
            <Table.Cell>38.5</Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>Chelsea</Table.Cell>
            <Table.Cell>2012</Table.Cell>
            <Table.Cell>91</Table.Cell>
            <Table.Cell>27</Table.Cell>
            <Table.Cell>0.27</Table.Cell>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>23</Table.Cell>
            <Table.Cell>12</Table.Cell>
            <Table.Cell>0.88</Table.Cell>
            <Table.Cell>70</Table.Cell>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>38.5</Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>Bayern Munich</Table.Cell>
            <Table.Cell>2013</Table.Cell>
            <Table.Cell>113</Table.Cell>
            <Table.Cell>30</Table.Cell>
            <Table.Cell>0.25</Table.Cell>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>7</Table.Cell>
            <Table.Cell>21</Table.Cell>
            <Table.Cell>11</Table.Cell>
            <Table.Cell>0.85</Table.Cell>
            <Table.Cell>33</Table.Cell>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>38.5</Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>Dortrmund</Table.Cell>
            <Table.Cell>2013</Table.Cell>
            <Table.Cell>109</Table.Cell>
            <Table.Cell>23</Table.Cell>
            <Table.Cell>0.19</Table.Cell>
            <Table.Cell>9</Table.Cell>
            <Table.Cell>8</Table.Cell>
            <Table.Cell>20</Table.Cell>
            <Table.Cell>14</Table.Cell>
            <Table.Cell>1.08</Table.Cell>
            <Table.Cell>44</Table.Cell>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>30.8</Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>Real Mardid</Table.Cell>
            <Table.Cell>2014</Table.Cell>
            <Table.Cell>127</Table.Cell>
            <Table.Cell>41</Table.Cell>
            <Table.Cell>0.31</Table.Cell>
            <Table.Cell>7</Table.Cell>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>22</Table.Cell>
            <Table.Cell>11</Table.Cell>
            <Table.Cell>0.82</Table.Cell>
            <Table.Cell>57</Table.Cell>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>38.5</Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>Atletico Mardid</Table.Cell>
            <Table.Cell>2014</Table.Cell>
            <Table.Cell>102</Table.Cell>
            <Table.Cell>26</Table.Cell>
            <Table.Cell>0.25</Table.Cell>
            <Table.Cell>7</Table.Cell>
            <Table.Cell>7</Table.Cell>
            <Table.Cell>24</Table.Cell>
            <Table.Cell>10</Table.Cell>
            <Table.Cell>0.75</Table.Cell>
            <Table.Cell>50</Table.Cell>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>46.2</Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>Barcelona</Table.Cell>
            <Table.Cell>2015</Table.Cell>
            <Table.Cell>81</Table.Cell>
            <Table.Cell>31</Table.Cell>
            <Table.Cell>0.38</Table.Cell>
            <Table.Cell>7</Table.Cell>
            <Table.Cell>8</Table.Cell>
            <Table.Cell>22</Table.Cell>
            <Table.Cell>11</Table.Cell>
            <Table.Cell>0.85</Table.Cell>
            <Table.Cell>41</Table.Cell>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>46.2</Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>Juventus</Table.Cell>
            <Table.Cell>2015</Table.Cell>
            <Table.Cell>68</Table.Cell>
            <Table.Cell>16</Table.Cell>
            <Table.Cell>0.21</Table.Cell>
            <Table.Cell>7</Table.Cell>
            <Table.Cell>7</Table.Cell>
            <Table.Cell>24</Table.Cell>
            <Table.Cell>10</Table.Cell>
            <Table.Cell>0.77</Table.Cell>
            <Table.Cell>49</Table.Cell>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>46.2</Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>Real Madrid</Table.Cell>
            <Table.Cell>2016</Table.Cell>
            <Table.Cell>94</Table.Cell>
            <Table.Cell>27</Table.Cell>
            <Table.Cell>0.27</Table.Cell>
            <Table.Cell>7</Table.Cell>
            <Table.Cell>7</Table.Cell>
            <Table.Cell>22</Table.Cell>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>0.45</Table.Cell>
            <Table.Cell>50</Table.Cell>
            <Table.Cell>10</Table.Cell>
            <Table.Cell>76.9</Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>Atletico Madrid</Table.Cell>
            <Table.Cell>2016</Table.Cell>
            <Table.Cell>77</Table.Cell>
            <Table.Cell>16</Table.Cell>
            <Table.Cell>0.19</Table.Cell>
            <Table.Cell>8</Table.Cell>
            <Table.Cell>8</Table.Cell>
            <Table.Cell>23</Table.Cell>
            <Table.Cell>8</Table.Cell>
            <Table.Cell>0.59</Table.Cell>
            <Table.Cell>61</Table.Cell>
            <Table.Cell>8</Table.Cell>
            <Table.Cell>61.5</Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>Real Madrid</Table.Cell>
            <Table.Cell>2017</Table.Cell>
            <Table.Cell>93</Table.Cell>
            <Table.Cell>34</Table.Cell>
            <Table.Cell>0.37</Table.Cell>
            <Table.Cell>9</Table.Cell>
            <Table.Cell>8</Table.Cell>
            <Table.Cell>23</Table.Cell>
            <Table.Cell>18</Table.Cell>
            <Table.Cell>1.35</Table.Cell>
            <Table.Cell>54</Table.Cell>
            <Table.Cell>0</Table.Cell>
            <Table.Cell>0</Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>Juventus</Table.Cell>
            <Table.Cell>2017</Table.Cell>
            <Table.Cell>67</Table.Cell>
            <Table.Cell>21</Table.Cell>
            <Table.Cell>0.27</Table.Cell>
            <Table.Cell>7</Table.Cell>
            <Table.Cell>7</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>7</Table.Cell>
            <Table.Cell>0.54</Table.Cell>
            <Table.Cell>29</Table.Cell>
            <Table.Cell>0</Table.Cell>
            <Table.Cell>0</Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>Real Madrid</Table.Cell>
            <Table.Cell>2018</Table.Cell>
            <Table.Cell>91</Table.Cell>
            <Table.Cell>31</Table.Cell>
            <Table.Cell>0.32</Table.Cell>
            <Table.Cell>8</Table.Cell>
            <Table.Cell>8</Table.Cell>
            <Table.Cell>23</Table.Cell>
            <Table.Cell>16</Table.Cell>
            <Table.Cell>1.23</Table.Cell>
            <Table.Cell>55</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>23.1</Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>Liverpool</Table.Cell>
            <Table.Cell>2018</Table.Cell>
            <Table.Cell>91</Table.Cell>
            <Table.Cell>41</Table.Cell>
            <Table.Cell>0.44</Table.Cell>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>24</Table.Cell>
            <Table.Cell>16</Table.Cell>
            <Table.Cell>1.23</Table.Cell>
            <Table.Cell>44</Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>7.7</Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>Liverpool</Table.Cell>
            <Table.Cell>2019</Table.Cell>
            <Table.Cell>54</Table.Cell>
            <Table.Cell>24</Table.Cell>
            <Table.Cell>0.37</Table.Cell>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>7</Table.Cell>
            <Table.Cell>20</Table.Cell>
            <Table.Cell>12</Table.Cell>
            <Table.Cell>0.92</Table.Cell>
            <Table.Cell>57</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>15.4</Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>Tottenham</Table.Cell>
            <Table.Cell>2019</Table.Cell>
            <Table.Cell>75</Table.Cell>
            <Table.Cell>20</Table.Cell>
            <Table.Cell>0.27</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>24</Table.Cell>
            <Table.Cell>19</Table.Cell>
            <Table.Cell>1.47</Table.Cell>
            <Table.Cell>52</Table.Cell>
            <Table.Cell>0</Table.Cell>
            <Table.Cell>0</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    

    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 1' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 2' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered size='mini' />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)

export default FixedMenuLayout