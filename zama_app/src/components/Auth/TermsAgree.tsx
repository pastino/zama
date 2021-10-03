import React, {FunctionComponent, useState} from 'react';
import {Text, View} from 'react-native';
// commons
import BottomModalCard from '@/commons/Modals/BottomModalCard';
import BottomModalContainer from '@/commons/Modals/Container/BottomModalContainer';
import CheckBoxButton from '@/commons/Buttons/CheckBoxButton';
import VerticalDivider from '@/commons/Divider/VerticalDivider';
// stylse
import {RED, TURQUOISE} from '@/styles/colors';
import {SCREEN_WIDTH} from '@/styles/sizes';

export interface TermTypes {
  title: string;
  requirement: boolean;
  check: boolean;
  content: boolean;
}

interface Props {
  visible: boolean;
  setVisible: (any) => void;
  handlePressBtn: (term: TermTypes[]) => void;
}

const TermsAgree: FunctionComponent<Props> = ({
  visible,
  setVisible,
  handlePressBtn,
}) => {
  const [allAgree, setAllAgree] = useState(false);
  const [term, setTerm] = useState([
    {title: '서비스 이용약관', requirement: true, check: false, content: true},
    {
      title: '개인정보 처리방침',
      requirement: true,
      check: false,
      content: true,
    },
    {
      title: '마케팅 수신 동의',
      requirement: false,
      check: false,
      content: false,
    },
  ]);

  const requirementCheckedStates = term
    .filter(obj => obj.requirement)
    .map(term => term.check);

  const handleCheck = (index, check) => {
    const startData = term.slice(0, index);
    const endData = term.slice(Number(index) + 1, term.length);
    const changedData = [
      ...startData,
      {
        ...term[Number(index)],
        check,
      },
      ...endData,
    ];
    setTerm(changedData);

    const checkedArray = changedData.filter(term => term.check === true);
    if (checkedArray.length === term.length) {
      setAllAgree(true);
    } else {
      setAllAgree(false);
    }
  };

  const handleAllCheck = () => {
    const allAgreeTerms: TermTypes[] = [];
    if (!allAgree) {
      setAllAgree(true);
      for (let i = 0; i < term.length; i++) {
        allAgreeTerms.push({...term[i], check: true});
      }
      setTerm(allAgreeTerms);
      return;
    }
    setAllAgree(false);
    for (let i = 0; i < term.length; i++) {
      allAgreeTerms.push({...term[i], check: false});
    }
    setTerm(allAgreeTerms);
  };

  return (
    <BottomModalContainer isVisible={visible} close={() => setVisible(false)}>
      <BottomModalCard
        buttonText="약관동의"
        buttonDisabled={requirementCheckedStates.includes(false)}
        onPress={() => handlePressBtn(term)}
        close={() => setVisible(false)}>
        <CheckBoxButton
          title={'모든 약관에 동의합니다'}
          check={allAgree}
          handleCheck={handleAllCheck}
        />
        <View style={{marginTop: 12, marginBottom: 12}}>
          <VerticalDivider width={SCREEN_WIDTH * 0.9} />
        </View>
        {term?.map((obj, index) => (
          <View
            key={obj.title}
            style={{
              marginTop: index !== 0 ? 7 : 0,
              marginBottom: index === term.length - 1 ? 10 : 0,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBoxButton
                index={index}
                {...obj}
                handleCheck={handleCheck}
              />
              {obj.requirement ? (
                <Text style={{color: RED, fontSize: 12}}>&nbsp;(필수)</Text>
              ) : (
                <Text style={{fontSize: 12}}>&nbsp;(선택)</Text>
              )}
            </View>
            {obj.content && (
              <View style={{}}>
                <Text
                  style={{
                    fontSize: 13,
                    color: TURQUOISE,
                    textDecorationLine: 'underline',
                  }}>
                  보러가기
                </Text>
              </View>
            )}
          </View>
        ))}
      </BottomModalCard>
    </BottomModalContainer>
  );
};

export default TermsAgree;
