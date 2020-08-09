import React from 'react';
import {  Image, Statistic, Button, Icon, Modal, Form } from 'semantic-ui-react';

import './ProfileSide.scss';


export const ProfileSide = props => {
  return(
    <div className='profile-side-wrapper'>
      <div className='profile-info-wrapper'>
        <div className='side-img-wrapper'>
          <Image src={props.profileImage} alt='Arab training' size='small' avatar />
          <p>{props.userName}</p>
        </div>
        <div className="side-info-statistic">
          <Statistic.Group>
            <Statistic>
              <Statistic.Value>{props.userCoursesNumber}</Statistic.Value>
              <Statistic.Label>عدد الدورات</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>{props.userCoursesSaved}</Statistic.Value>
              <Statistic.Label>المحفوظة</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>{props.teacherCourses}</Statistic.Value>
              <Statistic.Label>دورات كمدرب</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </div>
        <div className="side-user-action">
          <Modal trigger={
            <Button animated className='mainButton' >
              <Button.Content visible>طلب تدريب</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow left' />
              </Button.Content>
            </Button>
            }>
            <Modal.Header>طلب الالتحاق بالمدربيين</Modal.Header>

                <Modal.Content scrolling>
                  <Form>
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='اسم المدرب' placeholder='اكتب الاسم ثلاثي' />
                      <Form.Input fluid label='المسمى الوظيفي' placeholder='اكتب المسمى الحالي' />
                    </Form.Group>
                    <Form.Group widths='equal'>
                      <Form.Input type='number' fluid label='عدد سنوات الخبرة' placeholder='اكتب رقم سنوات الخبرة' />
                      <Form.Input fluid label='مركز تدريبي سابق' placeholder='اكتب أخر مركز تدريبي عملت به' />
                    </Form.Group>
                  </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button animated className='mainButton' >
                    <Button.Content visible>إرسـال</Button.Content>
                    <Button.Content hidden>
                      <Icon name='arrow left' />
                    </Button.Content>
                  </Button>
                </Modal.Actions>

          </Modal>
        </div>
        <div className="side-user-action">
          <Modal trigger={
            <Button animated className='mainButton' >
              <Button.Content visible>إضافة تدريب</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow left' />
              </Button.Content>
            </Button>
            }>
            <Modal.Header>إضافة دورة تدريبية</Modal.Header>

                <Modal.Content scrolling>
                  <Form>
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='اسم الدورة التدريبية' placeholder='اسم الدورة التدريبية' />
                      <Form.Input fluid label='اسم' placeholder='اكتب المسمى الحالي' />
                    </Form.Group>
                    <Form.Group widths='equal'>
                      <Form.Input type='number' fluid label='عدد سنوات الخبرة' placeholder='اكتب رقم سنوات الخبرة' />
                      <Form.Input fluid label='مركز تدريبي سابق' placeholder='اكتب أخر مركز تدريبي عملت به' />
                    </Form.Group>
                  </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button animated className='mainButton' >
                    <Button.Content visible>طلب نشر</Button.Content>
                    <Button.Content hidden>
                      <Icon name='arrow left' />
                    </Button.Content>
                  </Button>
                </Modal.Actions>

          </Modal>
        </div>

      </div>
      <div className='profile-ads-wrapper'>




      </div>
    </div>
  );
};
