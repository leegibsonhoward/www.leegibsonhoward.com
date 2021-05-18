(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{72:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return b})),o.d(t,"default",(function(){return p}));var n=o(3),r=o(7),a=(o(0),o(99)),i={id:"googlemock",title:"Install Google Mock",sidebar_label:"Google Mock"},l={unversionedId:"notes/googlemock",id:"notes/googlemock",isDocsHomePage:!1,title:"Install Google Mock",description:"I ran into a few hiccups while getting googlemock to work for the book",source:"@site/docs/notes/googlemock.md",slug:"/notes/googlemock",permalink:"/docs/notes/googlemock",version:"current",sidebar_label:"Google Mock",sidebar:"docs",previous:{title:"C Programming Language Escape Sequences",permalink:"/docs/c/escape"},next:{title:"Markdown Style Guide for Docusaurus",permalink:"/docs/docusaurus/style-guide"}},b=[{value:"Google Mock",id:"google-mock",children:[]},{value:"Google Test",id:"google-test",children:[]},{value:"Setup Enviroment Variables",id:"setup-enviroment-variables",children:[]},{value:"Build Google Mock",id:"build-google-mock",children:[]},{value:"Build Google Test",id:"build-google-test",children:[]},{value:"Other Notes",id:"other-notes",children:[]}],c={toc:b};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"I ran into a few hiccups while getting googlemock to work for the book\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.amazon.com/Modern-Programming-Test-Driven-Development-Better/dp/1937785483"}),"Modern C++ Programming with Test-Driven Development")),Object(a.b)("p",null,"The book is from 2013 and since then googlemock has been absorded by googletest\nin the newer versions. So this is how I got things up and running."),Object(a.b)("h2",{id:"google-mock"},"Google Mock"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Download the correct version of ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/google/googlemock/releases/tag/release-1.6.0"}),"googlemock v1.6.0"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Extract and put in root of home folder ",Object(a.b)("inlineCode",{parentName:"p"},"/home/$USER/googlemock-1.6.0")))),Object(a.b)("h2",{id:"google-test"},"Google Test"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Download the correct version of ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/google/googletest/releases/tag/release-1.6.0"}),"googletest v1.6.0"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Extract and copy to inside root directory of googlemock folder\nthen rename to gtest"))),Object(a.b)("h2",{id:"setup-enviroment-variables"},"Setup Enviroment Variables"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"export GMOCK_HOME=/home/user/googlemock-1.6.0")),Object(a.b)("h2",{id:"build-google-mock"},"Build Google Mock"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"cd $GMOCK_HOME"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"mkdir mybuild"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"cd mybuild"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"cmake .."),"  "),Object(a.b)("h2",{id:"build-google-test"},"Build Google Test"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"cd $GMOCK_HOME/gtest"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"mkdir mybuild"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"cd mybuild"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"cmake .."),"  "),Object(a.b)("p",null,"The above instructions are from Chapter 1.5 Google Mock section following the\ndirections for Unix."),Object(a.b)("h2",{id:"other-notes"},"Other Notes"),Object(a.b)("p",null,"While trying to build the examples from the book I ran into a pthread problem.\nIt seems that pthread needs to be linked after gtest is linked to.  "),Object(a.b)("p",null,"Changing the order in CMakeLists.txt fixed the error. i.e:"),Object(a.b)("p",null,"From:",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"target_link_libraries(test pthread)"),"\n",Object(a.b)("inlineCode",{parentName:"p"},"target_link_libraries(test gmock)"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"target_link_libraries(test gtest)"),"  "),Object(a.b)("p",null,"To:",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"target_link_libraries(test gmock)"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"target_link_libraries(test gtest)"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"target_link_libraries(test pthread)"),"  "))}p.isMDXComponent=!0}}]);