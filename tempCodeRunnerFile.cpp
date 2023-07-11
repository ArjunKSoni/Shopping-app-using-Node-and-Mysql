#include <bits/stdc++.h>
using namespace std;
int main(){
    vector<int>height{0,1,0,2,1,0,1,3,2,1,2,1};
    int ans=0;
    vector<int>left(height.size());
    vector<int>right(height.size());
    left[0]=(height[0]);
    right[height.size()-1]=height[height.size()-1];
    for(int i=1;i<height.size();i++){
        left[i]=(max(left[i-1],height[i]));
    }
    for(int i=height.size()-2;i>=0;i--){
        right[i]=(max(right[i+1],height[i]));
    }
    for(int i=0;i<height.size();i++){
        ans+=abs(min(left[i],right[i]))-height[i];
    }cout<<ans;
}