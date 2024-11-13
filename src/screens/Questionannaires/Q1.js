import React, {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  View,
  Text,
  Touchable,
  TouchableOpacity,
  FlatList,
  Image,
  Button,
} from 'react-native';
import style from './style';
import Back from '../../components/Back';
import {useNavigation} from '@react-navigation/native';
import Options from '../../components/Options';
import NextBtn from '../../components/NextBtn';
import DatePicker from 'react-native-date-picker';
import Options2 from '../../components/Options2';
const Questionaire = () => {
  const [currentId, setCurrentId] = useState(1);
  const navigation = useNavigation();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [optionId, setOptionId] = useState(null);
  const [optionId1, setOptionId1] = useState(null);
  const [optionId2, setOptionId2] = useState(null);
  const [optionId3,setOptionId3] = useState(null)
  const [optionId4,setOptionId4] = useState(null)
  const [gender, setGender] = useState();
  const [mode, setMode] = useState();
  const [diet,setDiet] = useState()
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const ToggleOptions = id => {
    setSelectedOptions(prevSelected => 
      prevSelected.includes(id)
        ? prevSelected.filter(optionId => optionId !== id)
        : [...prevSelected, id]
    );
  };
  
  const chooseEquipments = ({item}) => {
    if (!item) return null; // Safeguard in case item is undefined

    return (
      <Options
        text={item.text}
        selectedOption={() => ToggleOptions(item.id)}
        isSelected={selectedOptions.includes(item.id)}
      />
    );
  };

  const toggleOption = (id, value, setter) => {
    setter(value === id ? null : id);
  };

  const renderOption = ({item}, value, setter) => {
    return (
      <Options
        text={item.text}
        selectedOption={() => toggleOption(item.id, value, setter)}
        isSelected={value === item.id}
      />
    );
  };

  const nextOnPress = condition => {
    if (condition) {
      setCurrentId(currentId + 1);
    }
  };

  const selectGender = gender => {
    setGender(gender);
  };
  const backOnPress = () => {
    setCurrentId(currentId - 1);
  };
  switch (currentId) {
    case 1:
      const data = [
        {
          id: 1,
          text: 'Loose Weight',
        },
        {
          id: 2,
          text: 'Gain Weight',
        },
        {
          id: 3,
          text: 'Build Muscle',
        },
        {
          id: 4,
          text: 'Get Fit',
        },
      ];
      return (
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../../components/Assets/fitness.jpg')}
            style={style.imageBackground}>
            <Back
              containerStyle={{marginTop: 40, marginLeft: 12}}
              onPress={() => navigation.goBack()}
            />
          </ImageBackground>
          <Text style={style.mainText}>What's your Goal?</Text>
          <Text style={style.subText}>Select one that apply</Text>
          <View style={{marginTop: 30}}>
            <FlatList
              data={data}
              renderItem={({item}) =>
                renderOption({item}, optionId, setOptionId)
              }
              keyExtractor={item => item.id.toString()}
            />
          </View>
          <View style={style.BottomView}>
            <NextBtn
              text={'Next'}
              onPress={() => {
                nextOnPress(optionId !== null);
              }}
            />
          </View>
        </View>
      );
      break;
    case 2:
      return (
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../../components/Assets/genders.jpg')}
            style={style.imageBackground}>
            <Back
              containerStyle={{marginTop: 40, marginLeft: 12}}
              onPress={() => navigation.goBack()}
            />
          </ImageBackground>
          <Text style={style.mainText}>What's your Gender</Text>
          <Text style={style.subText}>Select one that apply</Text>
          <View
            style={{
              marginTop: 30,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              style={[
                style.genderStyles,
                {borderColor: gender !== 'male' ? '#999999' : '#06C3A5'},
              ]}
              onPress={() => selectGender('male')}>
              <Image
                source={require('../../components/Assets/Male.png')}
                style={{
                  height: 36,
                  width: 36,
                  tintColor: gender !== 'male' ? '#999999' : '#06C3A5',
                }}
              />
              <Text
                style={{
                  marginVertical: 5,
                  color: gender !== 'male' ? '#999999' : '#06C3A5',
                }}>
                Male
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                style.genderStyles,
                {borderColor: gender === 'Female' ? '#06C3A5' : '#999999'},
              ]}
              onPress={() => selectGender('Female')}>
              <Image
                source={require('../../components/Assets/Female.png')}
                style={{
                  height: 36,
                  width: 36,
                  tintColor: gender === 'Female' ? '#06C3A5' : '#999999',
                }}
              />
              <Text
                style={{
                  marginVertical: 5,
                  color: gender === 'Female' ? '#06C3A5' : '#999999',
                }}>
                Female
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.BottomView}>
            <NextBtn
              text={'Next'}
              onPress={() => {
                nextOnPress(gender);
              }}
            />
            <TouchableOpacity style={style.back} onPress={backOnPress}>
              <Text style={{fontFamily: 'Poppins-Regular', color: '#06C3A5'}} n>
                Back
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
      break;
    case 3:
      return (
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../../components/Assets/yoga.jpg')}
            style={style.imageBackground}>
            <Back
              containerStyle={{marginTop: 40, marginLeft: 12}}
              onPress={() => navigation.goBack()}
            />
          </ImageBackground>
          <Text style={style.mainText}>When is your Birthday?</Text>
          <View style={style.dateStyle}>
            <DatePicker
              mode="date"
              open={open} // Controls visibility
              date={date} // Keeps previously selected date
              onConfirm={selectedDate => {
                setDate(selectedDate); // Updates the date state with the selected date
                setOpen(false); // Closes the DatePicker
              }}
              onCancel={() => {
                setOpen(false); // Close DatePicker if canceled
              }}
            />
          </View>
          <View style={style.BottomView}>
            <NextBtn
              text={'Next'}
              onPress={() => {
                nextOnPress(nextOnPress(date));
              }}
            />
            <TouchableOpacity style={style.back} onPress={backOnPress}>
              <Text style={{fontFamily: 'Poppins-Regular', color: '#06C3A5'}}>
                Back
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
      break;
    case 4:
      const data1 = [
        {
          id: 1,
          text: 'Not At All',
        },
        {
          id: 2,
          text: '1-2 workouts a week',
        },
        {
          id: 3,
          text: '3-5 workouts a week',
        },
        {
          id: 4,
          text: '5-7 workouts a week',
        },
      ];
      return (
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../../components/Assets/plank.jpg')}
            style={style.imageBackground}>
            <Back
              containerStyle={{marginTop: 40, marginLeft: 12}}
              onPress={() => navigation.goBack()}
            />
          </ImageBackground>
          <Text style={style.mainText}>How Physically active you are?</Text>
          <Text style={style.subText}>Select one that apply</Text>
          <View style={{marginTop: 30}}>
            <FlatList
              data={data1}
              renderItem={({item}) =>
                renderOption({item}, optionId1, setOptionId1)
              }
              keyExtractor={item => item.id.toString()}
            />
          </View>
          <View style={style.BottomView}>
            <NextBtn
              text={'Next'}
              onPress={() => {
                nextOnPress(optionId1 !== null);
              }}
            />
            <TouchableOpacity style={style.back} onPress={backOnPress}>
              <Text style={{fontFamily: 'Poppins-Regular', color: '#06C3A5'}}>
                Back
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
      break;
    case 5:
      const data2 = [
        {
          id: 1,
          text: '5-10 times a week',
        },
        {
          id: 2,
          text: '10-15 times a week',
        },
        {
          id: 3,
          text: '15-20 times a week',
        },
      ];
      return (
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../../components/Assets/gym.jpg')}
            style={style.imageBackground}>
            <Back
              containerStyle={{marginTop: 40, marginLeft: 12}}
              onPress={() => navigation.goBack()}
            />
          </ImageBackground>
          <Text style={style.mainText}>
            How many times do you want to workout a week?
          </Text>
          <Text style={style.subText}>Select one that apply</Text>
          <View style={{marginTop: 30}}>
            <FlatList
              data={data2}
              renderItem={({item}) =>
                renderOption({item}, optionId2, setOptionId2)
              }
              keyExtractor={item => item.id.toString()}
            />
          </View>
          <View style={style.BottomView}>
            <NextBtn
              text={'Next'}
              onPress={() => {
                nextOnPress(optionId2 !== null);
              }}
            />
            <TouchableOpacity style={style.back} onPress={backOnPress}>
              <Text style={{fontFamily: 'Poppins-Regular', color: '#06C3A5'}}>
                Back
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
      break;
    case 6:
      return (
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../../components/Assets/gymnasium.jpg')}
            style={style.imageBackground}>
            <Back
              containerStyle={{marginTop: 40, marginLeft: 12}}
              onPress={() => navigation.goBack()}
            />
          </ImageBackground>
          <Text style={style.mainText}>Where do you prefer to workout</Text>
          <Text style={style.subText}>Select one that apply</Text>
          <View
            style={{
              marginTop: 30,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              style={[
                style.genderStyles,
                {borderColor: mode !== 'home' ? '#999999' : '#06C3A5'},
              ]}
              onPress={() => setMode('home')}>
              <Image
                source={require('../../components/Assets/Home.png')}
                style={{
                  height: 36,
                  width: 36,
                  tintColor: mode !== 'home' ? '#999999' : '#06C3A5',
                }}
              />
              <Text
                style={{
                  marginVertical: 5,
                  color: mode !== 'home' ? '#999999' : '#06C3A5',
                }}>
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                style.genderStyles,
                {borderColor: mode === 'Gym' ? '#06C3A5' : '#999999'},
              ]}
              onPress={() => setMode('Gym')}>
              <Image
                source={require('../../components/Assets/gymIcon.png')}
                style={{
                  height: 36,
                  width: 36,
                  tintColor: mode === 'Gym' ? '#06C3A5' : '#999999',
                }}
              />
              <Text
                style={{
                  marginVertical: 5,
                  color: mode === 'Gym' ? '#06C3A5' : '#999999',
                }}>
                Gym
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.BottomView}>
            <NextBtn
              text={'Next'}
              onPress={() => {
                nextOnPress(mode);
              }}
            />
            <TouchableOpacity style={style.back} onPress={backOnPress}>
              <Text style={{fontFamily: 'Poppins-Regular', color: '#06C3A5'}} n>
                Back
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
      break;
    case 7:
      const data3 = [
        {id: 1, text: 'Equipment 1'},
        {id: 2, text: 'Equipment 2'},
        {id: 3, text: 'Equipment 3'},
        {id: 4, text: 'Equipment 4'},
        {id: 5, text: 'No Equipment'},
      ];
      return (
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../../components/Assets/equipment.jpg')}
            style={style.imageBackground}>
            <Back
              containerStyle={{marginTop: 40, marginLeft: 12}}
              onPress={() => navigation.goBack()}
            />
          </ImageBackground>
          <Text style={style.mainText}>What equipments do you have?</Text>
          <Text style={style.subText}>Select all that apply</Text>
          <View style={{marginTop: 30}}>
            <FlatList
              data={data3}
              renderItem={chooseEquipments}
              keyExtractor={item => item.id.toString()}
              extraData={selectedOptions}
            />
          </View>
          <View style={style.BottomView}>
            <NextBtn
              text={'Next'}
              onPress={() => {
                nextOnPress(selectedOptions.length>0);
              }}
            />
            <TouchableOpacity style={style.back} onPress={backOnPress}>
              <Text style={{fontFamily: 'Poppins-Regular', color: '#06C3A5'}}>
                Back
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
      break
      case 8:
        const data4 = [
          {
            id: 1,
            text: 'Yes',
          },
          {
            id: 2,
            text: 'No',
          }
        ];
        return (
          <View style={{flex: 1}}>
            <ImageBackground
              source={require('../../components/Assets/weightScale.jpg')}
              style={style.imageBackground}>
              <Back
                containerStyle={{marginTop: 40, marginLeft: 12}}
                onPress={() => navigation.goBack()}
              />
            </ImageBackground>
            <Text style={style.mainText}>Do you have a scale at home?</Text>
            <Text style={style.recommendation}>
            We highly recommend getting a scale.
            </Text>
            <Text style={style.subText}>Select one that apply</Text>
            <View style={{marginTop: 30}}>
              <FlatList
                data={data4}
                renderItem={({item}) =>
                  renderOption({item}, optionId3, setOptionId3)
                }
                keyExtractor={item => item.id.toString()}
              />
            </View>
            <View style={style.BottomView}>
              <NextBtn
                text={'Next'}
                onPress={() => {
                  nextOnPress(optionId3!== null);
                }}
              />
              <TouchableOpacity style={style.back} onPress={backOnPress}>
                <Text style={{fontFamily: 'Poppins-Regular', color: '#06C3A5'}}>
                  Back
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
        break;
        case 9 :
          const data5 = [
            {
              id: 1,
              text: '30 mins',
            },
            {
              id: 2,
              text: '45 mins',
            },{
              id:3,
              text:'1 hour'
            },{
              id:4,
              text:"More than 1 hour"
            }
          ];
          return (
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../../components/Assets/workout.jpg')}
                style={style.imageBackground}>
                <Back
                  containerStyle={{marginTop: 40, marginLeft: 12}}
                  onPress={() => navigation.goBack()}
                />
              </ImageBackground>
              <Text style={style.mainText}>How long do you have time to workout?</Text>
              <Text style={style.subText}>Select one that apply</Text>
              <View style={{marginTop: 30}}>
                <FlatList
                  data={data5}
                  renderItem={({item}) =>
                    renderOption({item}, optionId4, setOptionId4)
                  }
                  keyExtractor={item => item.id.toString()}
                />
              </View>
              <View style={style.BottomView}>
                <NextBtn
                  text={'Next'}
                  onPress={() => {
                    nextOnPress(optionId4!== null);
                  }}
                />
                <TouchableOpacity style={style.back} onPress={backOnPress}>
                  <Text style={{fontFamily: 'Poppins-Regular', color: '#06C3A5'}}>
                    Back
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
          break;
          case 10:
            return (
              <View style={{flex: 1}}>
                <ImageBackground
                  source={require('../../components/Assets/calender.jpg')}
                  style={style.imageBackground}>
                  <Back
                    containerStyle={{marginTop: 40, marginLeft: 12}}
                    onPress={() => navigation.goBack()}
                  />
                </ImageBackground>
                <Text style={style.mainText}>When do you want to reach your goal by the date?</Text>
                <View style={style.dateStyle}>
                  <DatePicker
                    mode="date"
                    open={open} // Controls visibility
                    date={date} // Keeps previously selected date
                    onConfirm={selectedDate => {
                      setDate(selectedDate); // Updates the date state with the selected date
                      setOpen(false); // Closes the DatePicker
                    }}
                    onCancel={() => {
                      setOpen(false); // Close DatePicker if canceled
                    }}
                  />
                </View>
                <View style={style.BottomView}>
                  <NextBtn
                    text={'Next'}
                    onPress={() => {
                      nextOnPress(nextOnPress(date));
                    }}
                  />
                  <TouchableOpacity style={style.back} onPress={backOnPress}>
                    <Text style={{fontFamily: 'Poppins-Regular', color: '#06C3A5'}}>
                      Back
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
            break;
            case 11:
              return (
                <View style={{flex: 1}}>
                  <ImageBackground
                    source={require('../../components/Assets/diet.jpg')}
                    style={style.imageBackground}>
                    <Back
                      containerStyle={{marginTop: 40, marginLeft: 12}}
                      onPress={() => navigation.goBack()}
                    />
                  </ImageBackground>
                  <Text style={style.mainText}>Choose your diet type.</Text>
                  <Text style={style.subText}>Select one that apply</Text>
                  <View
                    style={{
                      marginTop: 30,
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <TouchableOpacity
                      style={[
                        style.genderStyles,
                        {borderColor: diet !== 'Traditional' ? '#999999' : '#06C3A5'},
                      ]}
                      onPress={() => setDiet('Traditional')}>
                      <Image
                        source={require('../../components/Assets/traditional.png')}
                        style={{
                          height: 36,
                          width: 36,
                          tintColor: diet !== 'Traditional' ? '#999999' : '#06C3A5',
                        }}
                      />
                      <Text
                        style={{
                          marginVertical: 5,
                          color: diet !== 'Traditional' ? '#999999' : '#06C3A5',
                        }}>
                        Traditional
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        style.genderStyles,
                        {borderColor: diet === 'Keto' ? '#06C3A5' : '#999999'},
                      ]}
                      onPress={() => setDiet('Keto')}>
                      <Image
                        source={require('../../components/Assets/Keto.png')}
                        style={{
                          height: 36,
                          width: 36,
                          tintColor: diet === 'Keto' ? '#06C3A5' : '#999999',
                        }}
                      />
                      <Text
                        style={{
                          marginVertical: 5,
                          color: diet === 'Keto' ? '#06C3A5' : '#999999',
                        }}>
                          Keto
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={style.BottomView}>
                    <NextBtn
                      text={'Next'}
                      onPress={() => {
                        nextOnPress(diet);
                      }}
                    />
                    <TouchableOpacity style={style.back} onPress={backOnPress}>
                      <Text style={{fontFamily: 'Poppins-Regular', color: '#06C3A5'}} n>
                        Back
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
              break;
              case 12:
                return(
                  <View style={{flex: 1}}>
                  <ImageBackground
                    source={require('../../components/Assets/plate.jpg')}
                    style={style.imageBackground}>
                    <Back
                      containerStyle={{marginTop: 40, marginLeft: 12}}
                      onPress={() => navigation.goBack()}
                    />
                  </ImageBackground>
                  <Text style={style.mainText}>Select your food preferences?</Text>
                  <Text style={style.subText}>Select one that apply</Text>
                  <View style={{flexDirection:"row",justifyContent:"center"}}>
                  <View style={style.multipleOptions}>
                  <Options2 text={"Eggs"} url={require('../../components/Assets/Eggs.png')}/>
                  <Options2 text={"Shrimp"} url={require('../../components/Assets/shrimp.png')}/>
                  <Options2 text={"Vegies"} url={require('../../components/Assets/Vegies.png')}/>
                  </View>
                  <View style={style.multipleOptions}>
                  <Options2 text={"Eggs"} url={require('../../components/Assets/Eggs.png')}/>
                  <Options2 text={"Shrimp"} url={require('../../components/Assets/shrimp.png')}/>
                  <Options2 text={"Vegies"} url={require('../../components/Assets/Vegies.png')}/>
                  </View>
                  </View>
                  </View>

                )
        }
  }

export default Questionaire;
