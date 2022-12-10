import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor VectorProtocol {
  stable var startValue: Float = 0;
  stable var startTime = Time.now();

  //Function for topping up of account
  public func topUp(amount: Float) {
    let tempValue: Float = startValue + amount;
    if (tempValue >= 0) {
      startValue += amount;
    } else {
      Debug.print("Wrong amount try again")
    };
  };

  //Function for withdrawal in the account while having an if/else statement for a negative or more figure
  public func withdraw(amount: Float) {
    let tempValue: Float = startValue - amount;
    if (tempValue >= 0){
      startValue -= amount;
    }else {
      Debug.print("Wrong amount try again")
    };
  };

  // Function to check the balance
  public query func checkBalance(): async Float {
    return startValue; 
  };

  // function to calculate the total compund interest of 0.001 every seconds
   public func compound() {
    let currentTime = Time.now();
    let timeElapsedNS = currentTime - startTime;
    let timeElapsedS = timeElapsedNS / 1000000000;
    startValue := startValue * (1.00001 ** Float.fromInt(timeElapsedS));
    startTime := currentTime;
    
  };

};
