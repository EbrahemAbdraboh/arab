import React from 'react';
import { Tab, Statistic, Table, Accordion, Icon, Modal } from 'semantic-ui-react'
import { TextParagraph } from '../../../../common/TextParagraph/TextParagraph';
import ReactPlayer from 'react-player';
import './CourseContentTabs.scss';



export class CourseContentTabs extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0
    }
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
  render(){
    const { activeIndex } = this.state
    const { courseDesc, dateStart, lectureNumber, totalLectures, lock, lockData } = this.props;
    const panes = [
      {
        menuItem: 'المحتوى',
        render: () => (
          <Tab.Pane attached={false}>
            <div className='content-table-wrapper'>
            <Accordion fluid styled>
               <Accordion.Title
                 active={activeIndex === 0}
                 index={0}
                 onClick={this.handleClick}
               >
                 <Icon name='dropdown' />
                 الفصل الأول: تجهيز واجهة البرنامج
               </Accordion.Title>
               <Accordion.Content active={activeIndex === 0}>
                 <div className='content-table-container'>
                  <Table celled >
                   <Table.Body>
                     <Table.Row>
                       <Table.Cell singleLine textAlign='right'>
                         <Modal trigger={<span>المقدمة</span>} basic size='small'>
                           <Modal.Content>
                            <div className='player-wrapper'>
                              <ReactPlayer
                                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                                className='react-player'
                                width='100%'
                                height="100%"
                              />
                             </div>
                           </Modal.Content>
                         </Modal>
                       </Table.Cell>
                       <Table.Cell textAlign='center' >
                         <Icon color='grey' name={lock}  />
                       </Table.Cell>
                     </Table.Row>
                     <Table.Row>
                       <Table.Cell singleLine textAlign='right'>
                         <Modal trigger={<span>التعرف على واجهة البرنامج</span>} basic size='small'>
                           <Modal.Content>
                            <div className='player-wrapper'>
                              <ReactPlayer
                                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                                className='react-player'
                                width='100%'
                                height="100%"
                              />
                             </div>
                           </Modal.Content>
                         </Modal>
                       </Table.Cell>
                       <Table.Cell textAlign='center' >
                         <Icon color='grey' name={lock}  />
                       </Table.Cell>
                     </Table.Row>
                     <Table.Row>
                       <Table.Cell singleLine textAlign='right'>
                         <Modal trigger={<span>التعامل مع أدوات البرنامج وتوصيفها</span>} basic size='small'>
                           <Modal.Content>
                            <div className='player-wrapper'>
                              <ReactPlayer
                                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                                className='react-player'
                                width='100%'
                                height="100%"
                              />
                             </div>
                           </Modal.Content>
                         </Modal>
                       </Table.Cell>
                       <Table.Cell textAlign='center' >
                         <Icon color='grey' name={lock}  />
                       </Table.Cell>
                     </Table.Row>
                     <Table.Row>
                       <Table.Cell singleLine textAlign='right'>
                         <Modal trigger={<span>التعامل مع التأثيرات الخارجية للبرنامج </span>} basic size='small'>
                           <Modal.Content>
                            <div className='player-wrapper'>
                              <ReactPlayer
                                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                                className='react-player'
                                width='100%'
                                height="100%"
                              />
                             </div>
                           </Modal.Content>
                         </Modal>
                       </Table.Cell>
                       <Table.Cell textAlign='center' >
                         <Icon color='grey' name={lock}  />
                       </Table.Cell>
                     </Table.Row>
                   </Table.Body>
                  </Table>

                  <div className={lockData}></div>
                 </div>
               </Accordion.Content>

               <Accordion.Title
                 active={activeIndex === 1}
                 index={1}
                 onClick={this.handleClick}
               >
                 <Icon name='dropdown' />
                 الفصل الثاني: التعامل مع محتويات البرنامج
               </Accordion.Title>
               <Accordion.Content active={activeIndex === 1}>
                 <div className='content-table-container'>
                  <Table celled >
                   <Table.Body>
                     <Table.Row>
                       <Table.Cell singleLine textAlign='right'>
                         <Modal trigger={<span>المقدمة</span>} basic size='small'>
                           <Modal.Content>
                            <div className='player-wrapper'>
                              <ReactPlayer
                                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                                className='react-player'
                                width='100%'
                                height="100%"
                              />
                             </div>
                           </Modal.Content>
                         </Modal>
                       </Table.Cell>
                       <Table.Cell textAlign='center' >
                         <Icon color='grey' name={lock}  />
                       </Table.Cell>
                     </Table.Row>
                     <Table.Row>
                       <Table.Cell singleLine textAlign='right'>
                         <Modal trigger={<span>التعرف على واجهة البرنامج</span>} basic size='small'>
                           <Modal.Content>
                            <div className='player-wrapper'>
                              <ReactPlayer
                                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                                className='react-player'
                                width='100%'
                                height="100%"
                              />
                             </div>
                           </Modal.Content>
                         </Modal>
                       </Table.Cell>
                       <Table.Cell textAlign='center' >
                         <Icon color='grey' name={lock}  />
                       </Table.Cell>
                     </Table.Row>
                     <Table.Row>
                       <Table.Cell singleLine textAlign='right'>
                         <Modal trigger={<span>التعامل مع أدوات البرنامج وتوصيفها</span>} basic size='small'>
                           <Modal.Content>
                            <div className='player-wrapper'>
                              <ReactPlayer
                                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                                className='react-player'
                                width='100%'
                                height="100%"
                              />
                             </div>
                           </Modal.Content>
                         </Modal>
                       </Table.Cell>
                       <Table.Cell textAlign='center' >
                         <Icon color='grey' name={lock}  />
                       </Table.Cell>
                     </Table.Row>
                     <Table.Row>
                       <Table.Cell singleLine textAlign='right'>
                         <Modal trigger={<span>التعامل مع التأثيرات الخارجية للبرنامج </span>} basic size='small'>
                           <Modal.Content>
                            <div className='player-wrapper'>
                              <ReactPlayer
                                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                                className='react-player'
                                width='100%'
                                height="100%"
                              />
                             </div>
                           </Modal.Content>
                         </Modal>
                       </Table.Cell>
                       <Table.Cell textAlign='center' >
                         <Icon color='grey' name={lock}  />
                       </Table.Cell>
                     </Table.Row>
                   </Table.Body>
                  </Table>

                  <div className={lockData}></div>
                 </div>
               </Accordion.Content>

               <Accordion.Title
                 active={activeIndex === 2}
                 index={2}
                 onClick={this.handleClick}
               >
                 <Icon name='dropdown' />
                 الفصل الثالث: الانتهاء من البرنامج والتطبيق العملي
               </Accordion.Title>
               <Accordion.Content active={activeIndex === 2}>
                 <div className='content-table-container'>
                  <Table celled >
                   <Table.Body>
                     <Table.Row>
                       <Table.Cell singleLine textAlign='right'>
                         <Modal trigger={<span>المقدمة</span>} basic size='small'>
                           <Modal.Content>
                            <div className='player-wrapper'>
                              <ReactPlayer
                                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                                className='react-player'
                                width='100%'
                                height="100%"
                              />
                             </div>
                           </Modal.Content>
                         </Modal>
                       </Table.Cell>
                       <Table.Cell textAlign='center' >
                         <Icon color='grey' name={lock}  />
                       </Table.Cell>
                     </Table.Row>
                     <Table.Row>
                       <Table.Cell singleLine textAlign='right'>
                         <Modal trigger={<span>التعرف على واجهة البرنامج</span>} basic size='small'>
                           <Modal.Content>
                            <div className='player-wrapper'>
                              <ReactPlayer
                                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                                className='react-player'
                                width='100%'
                                height="100%"
                              />
                             </div>
                           </Modal.Content>
                         </Modal>
                       </Table.Cell>
                       <Table.Cell textAlign='center' >
                         <Icon color='grey' name={lock}  />
                       </Table.Cell>
                     </Table.Row>
                     <Table.Row>
                       <Table.Cell singleLine textAlign='right'>
                         <Modal trigger={<span>التعامل مع أدوات البرنامج وتوصيفها</span>} basic size='small'>
                           <Modal.Content>
                            <div className='player-wrapper'>
                              <ReactPlayer
                                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                                className='react-player'
                                width='100%'
                                height="100%"
                              />
                             </div>
                           </Modal.Content>
                         </Modal>
                       </Table.Cell>
                       <Table.Cell textAlign='center' >
                         <Icon color='grey' name={lock}  />
                       </Table.Cell>
                     </Table.Row>
                     <Table.Row>
                       <Table.Cell singleLine textAlign='right'>
                         <Modal trigger={<span>التعامل مع التأثيرات الخارجية للبرنامج </span>} basic size='small'>
                           <Modal.Content>
                            <div className='player-wrapper'>
                              <ReactPlayer
                                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                                className='react-player'
                                width='100%'
                                height="100%"
                              />
                             </div>
                           </Modal.Content>
                         </Modal>
                       </Table.Cell>
                       <Table.Cell textAlign='center' >
                         <Icon color='grey' name={lock}  />
                       </Table.Cell>
                     </Table.Row>
                   </Table.Body>
                  </Table>

                  <div className={lockData}></div>
                 </div>

               </Accordion.Content>
             </Accordion>
            </div>
          </Tab.Pane>

        )
      },
      {
        menuItem: 'التفاصيل',
        render: () => (
          <Tab.Pane attached={false}>
            <div className="tab-wrapper">
              <TextParagraph text={courseDesc}/>
            </div>
          </Tab.Pane>
        )
      },
      {
        menuItem: 'المواعيد',
        render: () => (
          <Tab.Pane attached={false}>
            <div className='training-table-statistic'>
              <Statistic.Group>
                <Statistic>
                  <Statistic.Value>{dateStart}</Statistic.Value>
                  <Statistic.Label>يوم البدء</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value>{lectureNumber}</Statistic.Value>
                  <Statistic.Label>محاضرات/أسبوع</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value>{totalLectures}</Statistic.Value>
                  <Statistic.Label>عدد المحاضرات</Statistic.Label>
                </Statistic>
              </Statistic.Group>
            </div>
          </Tab.Pane>
        )
      },
    ]
    return(
      <div className="course-tabs-wrapper">
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </div>
    );
  }
};
