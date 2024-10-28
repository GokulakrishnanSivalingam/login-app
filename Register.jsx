import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking, Button, TouchableHighlight} from 'react-native';

function Register({navigation}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const[cpassword ,setCpassword]=useState('')
  const [password, setPassword] = useState('');
  const [passworderror, setPassworderror] = useState('');
const[error,setError]=useState('')
  const handleLogin = (e) => {
    let nextpage=true;
    
    if(username==='' || email==='' || password === ''|| cpassword === '')
    {
        setError("please fill the form");
        nextpage=false;
    }
    
  else if(password!==cpassword)
      {
        setPassworderror("check the confirm password");
        nextpage=false;
      } 
    else{
      nextpage =true;
    }
    if(!nextpage)
    {
      e.preventDefault();
    }
    else{
      navigation.navigate('Mainpage');
      set
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />
      <Text style={styles.error
      }>{error}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Email address"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
      />
       <Text style={styles.error
      }>{error}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
       <Text style={styles.error
      }>{error}</Text>
       <TextInput
        style={styles.input}
        placeholder="Enter confirm Password"
        placeholderTextColor="#aaa"
        value={cpassword}
        onChangeText={setCpassword}
        secureTextEntry
      />
       <Text style={styles.error
      }>{error}</Text><Text style={styles.error
      }>{passworderror}</Text>
      <TouchableHighlight style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableHighlight>
      <Text style={styles.footerText}> i have an account? <Text onPress={() => navigation.navigate('Login')}>Login</Text></Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 16,
    marginBottom: 20,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 2,
    color: '#333',
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#4b7bec',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 20,
    color: '#aaa',
    fontSize: 14,
  },
  error:{
    color:'red',
    fontSize:14,
    margin:10,
    marginTop:-10,
    marginRight:190
    
  }
});
export default Register