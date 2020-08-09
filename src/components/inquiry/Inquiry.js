import React from 'react'
import { Jumbotron } from '../common/jumbotron/Jumbotron';
import SectionWithBg from '../common/SectionWithBg/SectionWithBg';
import {InquiryCard} from './InquiryCard/InquiryCard';
import {InquiryControlPanel} from './InquiryControlPanel/InquiryControlPanel';



export class Inquiry extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      searchFiled: '',
      Inquiry: [
        {
          "id": "1",
          "question": "تم اليوم فتح المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي.",
          "answer": "قام الدكتور عبد الرحمن الدسوقي بفتح  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي. المركز التدريبي الخاص بجامعة ليو",
        },
        {
          "id": "2",
          "question": "تم اليوم فتح المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي.",
          "answer": "قام الدكتور عبد الرحمن الدسوقي بفتح  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي. المركز التدريبي الخاص بجامعة ليو",
        },
        {
          "id": "3",
          "question": "تم اليوم فتح المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي.",
          "answer": "قام الدكتور عبد الرحمن الدسوقي بفتح  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي. المركز التدريبي الخاص بجامعة ليو",
        },
        {
          "id": "4",
          "question": "تم اليوم فتح المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي.",
          "answer": "قام الدكتور عبد الرحمن الدسوقي بفتح  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي. المركز التدريبي الخاص بجامعة ليو",
        },
        {
          "id": "5",
          "question": "تم اليوم فتح المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي.",
          "answer": "قام الدكتور عبد الرحمن الدسوقي بفتح  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي. المركز التدريبي الخاص بجامعة ليو",
        },
        {
          "id": "6",
          "question": "تم اليوم فتح المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي.",
          "answer": "قام الدكتور عبد الرحمن الدسوقي بفتح  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي. المركز التدريبي الخاص بجامعة ليو",
        },
        {
          "id": "7",
          "question": "تم اليوم فتح المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيال المنصورة ي.",
          "answer": "قام الدكتور عبد الرحمن الدسوقي بفتح  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي. المركز التدريبي الخاص بجامعة ليو",
        },
        {
          "id": "8",
          "question": "تم اليوم فتح المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي.",
          "answer": "قام الدكتور عبد الرحمن الدسوقي بفتح  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي. المركز التدريبي الخاص بجامعة ليو",
        },
        {
          "id": "9",
          "question": " المنصورة تم اليوم فتح المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي.",
          "answer": " المنصورة الدكتور عبد الرحمن الدسوقي بفتح  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي  المركز التدريبي الخاص بجامعة ليون في المنتدى الثاني من إجراء المكتوب على كل الوحدات الخاصة بالإعلان عن المستوى الفني والإجراء الخيالي. المركز التدريبي الخاص بجامعة ليو",
        }
      ]
    }
  }


  render(){
    const { searchFiled, Inquiry } = this.state;
    const filterInquiry = Inquiry.filter(Inquiry =>
        Inquiry.question.toLowerCase().includes(searchFiled.toLowerCase())
      );

    return(
      <div>
        <Jumbotron jumboClass='page-slide' massegeClass='hideClass' massege='نعتمد على مبدأ التواصل الفعال'/>
        <SectionWithBg ImageClass='whiteSection'>
          <InquiryControlPanel
            searchBoxOnchange={e => this.setState({searchFiled: e.target.value})}
          />
          <div className='courses-wrapper'>
            <InquiryCard Inquiry={filterInquiry} />
          </div>
        </SectionWithBg>
      </div>
      )
  }
}