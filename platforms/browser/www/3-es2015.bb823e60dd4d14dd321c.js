(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8k80":function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class a{}var u=e("yWMr"),i=e("t68o"),s=e("zbXB"),o=e("NcP4"),r=e("xYTU"),c=e("WkNh"),b=e("KCZ/"),d=e("pMnS"),h=e("MKJQ"),g=e("sZkV"),p=e("FbN9"),m=e("BzsH"),f=e("/HVE"),v=e("SVse"),y=e("VDRc"),D=e("/q54"),C=e("s7LF"),k=e("mrSG"),x=e("iqUP"),M=e("KDUW"),O=e("HSB1"),P=e("UJml"),w=e("zKUs");class F{constructor(l,n,e,t,a,u,i,s,o){this.changeDetectorRefs=l,this.alertCtrl=n,this.authService=e,this.afStorage=t,this.imageService=a,this.alertController=u,this.router=i,this.userService=s,this.modalController=o,this.ages=[],this.religions=["Atheism","Buddhism","Christianity","Catholicism","Hinduism","Islam","Judaism","Other"],this.kidsOptions=["Yes","No","Maybe","No opinion"],this.user={},this.selectedFileName="Select File",this.thisImage={},this.images=[],this.imageUrls=[],this.file={},this._authState=null,this.ageActionSheetOptions={header:"Select your age"},this.religionActionSheetOptions={header:"Select your religion"},this.kidsActionSheetOptions={header:"Select your religion"},this.imagesTrackFn=(l,n)=>n.photoName,$("#file-upload").change((function(){$(this).prev("label").clone();const l=$("#file-upload")[0].files[0].name;$(this).prev("label").text(l)}))}get authState(){return this._authState}set authState(l){this._authState=l}ngOnInit(){for(let l=18;l<99;l++)this.ages.push(l);this.userRef=this.userService.getUser(this.authService.authState.email),this.userRef.get().subscribe(l=>{l.exists?(console.log("Document data:",l.data()),this.user=l.data()):console.log("No such document!")},l=>{}),this.loadPhotos()}ngAfterViewInit(){}onFileChanged(l){this.selectedFileName=l.target.value.split("C:\\fakepath\\").pop(),this.changeDetectorRefs.detectChanges(),console.log("AccountPage -> onFileChanged -> this.selectedFileName",this.selectedFileName)}onUpload(){if(this.selectedFile=$("#file-upload")[0].files[0],this.images.find(l=>l.photoName===this.selectedFile.name))this.existsAlert();else{this.tmpImages=[];const l=x.storage().ref();console.log("AccountPage -> onUpload -> this.selectedFile.name",this.selectedFile.name),l.child(`images/${this.user.email}/${this.selectedFile.name}`).put(this.selectedFile).then(l=>{console.log("Uploaded a blob or file1 (snapshot): ",l),this.imageRef=this.imageService.getTmpImages(this.authService.authState.email),this.imageRef.get().subscribe(l=>{this.thisImage.photoName=this.selectedFile.name,l.exists&&(x.storage().ref(`images/${this.authService.authState.email}/${this.selectedFile.name}`).getDownloadURL().then(l=>{}).catch((function(l){console.log("AccountPage -> loadPhotos -> error",l)})),this.imageService.addImageList({photoName:this.selectedFile.name},this.authService.authState.email),this.selectedFileName="Select File",this.router.navigateByUrl("/account"))})})}}loadPhotos(){this.images=[],this.imageUrls=[],this.imageService.getUserImageList(this.authService.authState.email).subscribe(l=>{this.images=l;for(const n of this.images)x.storage().ref(`images/${this.authService.authState.email}/${n.image.photoName}`).getDownloadURL().then(l=>{this.imageUrls.find(n=>n===l)||this.imageUrls.push(l)}).catch(l=>{console.log("AccountPage -> loadPhotos -> error",l)})})}deleteImage(l){this.deletedPhoto=this.images[l].image.photoName,this.imageNameRef=this.imageService.getImages(this.authService.authState.email).subscribe(n=>{if(n[l].payload.doc.data().image.photoName===this.deletedPhoto){this.imageService.deleteImage(n[l].payload.doc.id,this.authService.authState.email);const e=x.storage().ref().child(`images/${this.user.email}/${this.images[l].image.photoName}`);this.loadPhotos(),e.delete().then((function(){})).catch(l=>{console.log("deleteImage -> error",l)})}})}deleteAllPhotos(){this.imageUrls.forEach(l=>{this.imageService.deleteImage(l,this.authService.authState.email),x.storage().ref().child(`images/${this.user.email}/${l}`).delete().then((function(){})).catch(l=>{console.log("deleteImage -> error",l)})})}launchPicModal(){return k.a(this,void 0,void 0,(function*(){const l=yield this.modalController.create({component:w.a,componentProps:{email:this.authService.authState.email}});return yield l.present()}))}updatePicture(){return k.a(this,void 0,void 0,(function*(){const l=yield this.alertCtrl.create({header:"Change Picture",buttons:["Cancel",{text:"Ok",handler:l=>{this.user.photoURL=l.photoUrl,this.userService.updateUser(this.user)}}],inputs:[{type:"url",name:"photoUrl",placeholder:"photoUrl"}]});yield l.present()}))}updateUserData(l){return this.userRef.set({uid:this.authService.authState.uid,email:this.authService.authState.email,displayName:l.displayName,photoURL:l.photoURL,title:l.title,age:l.age,religion:l.religion,haveKids:l.haveKids,hobbies:l.hobbies,description:l.description},{merge:!0})}updateAvatar(){return k.a(this,void 0,void 0,(function*(){const l=yield this.alertCtrl.create({header:"Change Profile Picture",cssClass:"globalAlert",buttons:["Cancel",{text:"Ok",handler:l=>{this.user.photoURL=l.url,this.updateUserData(this.user)}}],inputs:[{type:"text",name:"url",placeholder:"url"}]});yield l.present()}))}updateUsername(){return k.a(this,void 0,void 0,(function*(){const l=yield this.alertCtrl.create({header:"Change Username",cssClass:"globalAlert",buttons:["Cancel",{text:"Ok",handler:l=>{this.user.displayName=l.username,this.updateUserData(this.user)}}],inputs:[{type:"text",name:"username",placeholder:"username"}]});yield l.present()}))}updateTitle(){return k.a(this,void 0,void 0,(function*(){const l=yield this.alertCtrl.create({header:"Change Title",cssClass:"globalAlert",buttons:["Cancel",{text:"Ok",handler:l=>{this.user.title=l.title,this.updateUserData(this.user)}}],inputs:[{type:"text",name:"title",placeholder:"title"}]});yield l.present()}))}updateAge(){this.user.age=this.selectedAge,this.updateUserData(this.user)}updateReligion(){this.user.religion=this.selectedReligion,this.updateUserData(this.user)}updateHaveKids(){this.user.haveKids=this.selectedKids,this.updateUserData(this.user)}updateHobbies(){return k.a(this,void 0,void 0,(function*(){const l=yield this.alertCtrl.create({header:"Change Hobbies",cssClass:"globalAlert",buttons:["Cancel",{text:"Ok",handler:l=>{this.user.hobbies=l.hobbies,this.updateUserData(this.user)}}],inputs:[{type:"textarea",name:"hobbies",placeholder:"Hobbies"}]});yield l.present()}))}updateDescription(){return k.a(this,void 0,void 0,(function*(){const l=yield this.alertCtrl.create({header:"Update Description",cssClass:"globalAlert",buttons:["Cancel",{text:"Ok",handler:l=>{this.user.description=l.description,this.updateUserData(this.user)}}],inputs:[{type:"textarea",name:"description",placeholder:"Description"}]});yield l.present()}))}getUsername(){this.username=this.authService.authState.displayName}existsAlert(){return k.a(this,void 0,void 0,(function*(){const l=yield this.alertController.create({header:"Image Upload Error",message:"Image already exists"});yield l.present()}))}}var U=e("HDdC"),A=e("lJxs");function S(l){const n=function(l){return new U.a(n=>(l.on("state_changed",l=>n.next(l),l=>n.error(l),()=>n.complete()),()=>l.cancel()))}(l);return{task:l,then:l.then.bind(l),catch:l.catch.bind(l),pause:l.pause.bind(l),cancel:l.cancel.bind(l),resume:l.resume.bind(l),snapshotChanges:()=>n,percentageChanges:()=>n.pipe(Object(A.a)(l=>l.bytesTransferred/l.totalBytes*100))}}var _=e("Cfvw");function L(l,n,e){return{getDownloadURL:()=>Object(_.a)(l.getDownloadURL(),n.outsideAngular).pipe(e),getMetadata:()=>Object(_.a)(l.getMetadata()).pipe(e),delete:()=>Object(_.a)(l.delete()),child:t=>L(l.child(t),n,e),updateMetatdata:n=>Object(_.a)(l.updateMetadata(n)),updateMetadata:n=>Object(_.a)(l.updateMetadata(n)),put:(n,e)=>S(l.put(n,e)),putString:(n,e,t)=>S(l.putString(n,e,t))}}var R=e("1XSQ"),N=e("yA/v");const I=new t.p("angularfire2.storageBucket");let H=class{constructor(l,n,e,t,a){this.schedulers=new R.a(a),this.keepUnstableUntilFirst=Object(R.b)(this.schedulers,t),this.storage=a.runOutsideAngular(()=>Object(N.e)(l,a,n).storage(e||void 0))}ref(l){return L(this.storage.ref(l),this.schedulers,this.keepUnstableUntilFirst)}upload(l,n,e){return L(this.storage.ref(l),this.schedulers,this.keepUnstableUntilFirst).put(n,e)}};var K=e("iInd"),j=t.rb({encapsulation:0,styles:[['.oval[_ngcontent-%COMP%]{cursor:pointer;border-radius:75px;border:1px solid #cc3732;background:#cc3732!important;color:#fff;font-size:12px;font-weight:700;padding:0;letter-spacing:1px;width:5rem;height:2.75rem;text-transform:uppercase;-webkit-transition:-webkit-transform 80ms ease-in;transition:-webkit-transform 80ms ease-in;transition:transform 80ms ease-in;transition:transform 80ms ease-in,-webkit-transform 80ms ease-in}.oval[_ngcontent-%COMP%]:active{-webkit-transform:scale(.95);transform:scale(.95)}.oval[_ngcontent-%COMP%]:focus{outline:0}i[_ngcontent-%COMP%]{padding-left:36%;padding-top:10%}span[_ngcontent-%COMP%]{margin-left:1em}span.span-2em[_ngcontent-%COMP%]{margin-left:2em}span.span-4em[_ngcontent-%COMP%]{margin-left:4em}*[_ngcontent-%COMP%]{box-sizing:inherit;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-timing-function:ease;transition-timing-function:ease}.buttons[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%;-webkit-box-pack:center;justify-content:center;text-align:center;width:100%}.btn[_ngcontent-%COMP%]{color:#000;cursor:pointer;font-size:16px;font-weight:400;line-height:45px;margin:0 0 2em;max-width:160px;position:relative;text-decoration:none;text-transform:uppercase;width:100%}.button-hover[_ngcontent-%COMP%]{letter-spacing:0}.button-hover[_ngcontent-%COMP%]:active, .button-hover[_ngcontent-%COMP%]:hover{letter-spacing:5px}.button-hover[_ngcontent-%COMP%]:after, .button-hover[_ngcontent-%COMP%]:before{-webkit-backface-visibility:hidden;backface-visibility:hidden;bottom:0;content:" ";display:block;margin:0 auto;position:relative;-webkit-transition:width 350ms ease-in-out;transition:all 280ms ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-color:#1a73e8;transition:width 350ms ease-in-out;width:70%}.button-hover[_ngcontent-%COMP%]:hover:before{bottom:auto;top:0;width:70%}.btn-primary[_ngcontent-%COMP%]:after, .btn-primary[_ngcontent-%COMP%]:before{border:1px solid #1a73e8}.btn-primary[_ngcontent-%COMP%]:active, .btn-primary[_ngcontent-%COMP%]:hover{border-color:#1a73e8}.btn-secondary[_ngcontent-%COMP%]:after, .btn-secondary[_ngcontent-%COMP%]:before{border:1px solid grey}.btn-secondary[_ngcontent-%COMP%]:active, .btn-secondary[_ngcontent-%COMP%]:hover{border-color:grey}img[_ngcontent-%COMP%]{max-width:140px;border-radius:50%}ion-content[_ngcontent-%COMP%]{max-width:100vw}.ion-padding-top[_ngcontent-%COMP%]{max-width:25vw;margin:0 auto}div.ion-padding-top[_ngcontent-%COMP%]{background-color:#fff;padding:2rem 4rem;width:50vw}.fxlayout-support[_ngcontent-%COMP%]{width:100vw;height:150vh;margin-top:-10vh;background-image:url(bg-6.0bdbeaa693a4577119b7.jpg);background-size:cover;background-repeat:repeat-y}ion-button[_ngcontent-%COMP%]{max-width:200px;margin:0 auto}label[_ngcontent-%COMP%]{border:none}#description-info[_ngcontent-%COMP%]{text-align:center}.start-text[_ngcontent-%COMP%]{font-style:italic;font-style:underline;text-align:left}i.fa-camera[_ngcontent-%COMP%]{padding-left:6%!important}.span-info[_ngcontent-%COMP%]{float:right}progress[_ngcontent-%COMP%]::-webkit-progress-value{-webkit-transition:width .1s;transition:width .1s ease}p[_ngcontent-%COMP%]{text-align:left}.cancel-icon[_ngcontent-%COMP%]{color:#dc143c;cursor:pointer}.custom-file-upload[_ngcontent-%COMP%]{display:inline-block;padding:6px 12px;cursor:pointer}h3[_ngcontent-%COMP%]{margin:5vh auto}a.btn[_ngcontent-%COMP%]{font-size:.625rem;width:10rem}@media screen and (max-width:812px){.ion-padding-top[_ngcontent-%COMP%]{max-width:94vw}}@media screen and (max-width:600px){.fxlayout-support[_ngcontent-%COMP%]{padding-top:35vh}div.ion-padding-top[_ngcontent-%COMP%]{width:100vw;padding:2rem 1rem}}']],data:{}});function B(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,2,"ion-select-option",[],null,null,null,h.gb,h.A)),t.sb(1,49152,null,0,g.lb,[t.h,t.k,t.y],{value:[0,"value"]},null),(l()(),t.Mb(2,0,[""," "]))],(function(l,n){l(n,1,0,t.xb(1,"",n.context.$implicit,""))}),(function(l,n){l(n,2,0,n.context.$implicit)}))}function J(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,2,"ion-select-option",[],null,null,null,h.gb,h.A)),t.sb(1,49152,null,0,g.lb,[t.h,t.k,t.y],{value:[0,"value"]},null),(l()(),t.Mb(2,0,[""," "]))],(function(l,n){l(n,1,0,t.xb(1,"",n.context.$implicit,""))}),(function(l,n){l(n,2,0,n.context.$implicit)}))}function T(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,2,"ion-select-option",[],null,null,null,h.gb,h.A)),t.sb(1,49152,null,0,g.lb,[t.h,t.k,t.y],{value:[0,"value"]},null),(l()(),t.Mb(2,0,[""," "]))],(function(l,n){l(n,1,0,t.xb(1,"",n.context.$implicit,""))}),(function(l,n){l(n,2,0,n.context.$implicit)}))}function q(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t.tb(2,0,null,null,1,"ion-icon",[["class","cancel-icon"],["name","close-outline"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.deleteImage(l.context.index)&&t),t}),h.U,h.n)),t.sb(3,49152,null,0,g.C,[t.h,t.k,t.y],{name:[0,"name"]},null),(l()(),t.tb(4,0,null,null,0,"img",[["class","all-images"]],[[8,"src",4]],null,null,null,null))],(function(l,n){l(n,3,0,"close-outline")}),(function(l,n){l(n,4,0,n.context.$implicit)}))}function z(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,12,"ion-header",[],null,null,null,h.T,h.m)),t.sb(1,49152,null,0,g.B,[t.h,t.k,t.y],null,null),(l()(),t.tb(2,0,null,0,10,"mat-toolbar",[["class","mat-toolbar"],["color","dark"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,p.b,p.a)),t.sb(3,4243456,null,1,m.a,[t.k,f.a,v.d],{color:[0,"color"]},null),t.Kb(603979776,1,{_toolbarRows:1}),(l()(),t.tb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,h.L,h.e)),t.sb(6,49152,null,0,g.l,[t.h,t.k,t.y],null,null),(l()(),t.tb(7,0,null,0,2,"ion-menu-button",[],null,null,null,h.ab,h.u)),t.sb(8,49152,null,0,g.R,[t.h,t.k,t.y],null,null),(l()(),t.tb(9,0,null,0,0,"i",[["class","fas fa-bars"]],null,null,null,null,null)),(l()(),t.tb(10,0,null,0,2,"ion-title",[["class","title-padding"]],null,null,null,h.nb,h.G)),t.sb(11,49152,null,0,g.xb,[t.h,t.k,t.y],null,null),(l()(),t.Mb(-1,0,["Dating App"])),(l()(),t.tb(13,0,null,null,132,"ion-content",[],null,null,null,h.S,h.l)),t.sb(14,49152,null,0,g.u,[t.h,t.k,t.y],null,null),(l()(),t.tb(15,0,null,0,130,"div",[["class","fxlayout-support"],["fxLayout","row"],["fxLayoutAlign","space-around center"]],null,null,null,null,null)),t.sb(16,671744,null,0,y.b,[t.k,D.i,[2,y.e],D.f],{fxLayout:[0,"fxLayout"]},null),t.sb(17,671744,null,0,y.a,[t.k,D.i,[2,y.d],D.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.tb(18,0,null,null,127,"div",[["class","ion-padding-top ion-text-center"]],null,null,null,null,null)),(l()(),t.tb(19,0,null,null,0,"img",[["alt","avatar"]],[[8,"src",4]],null,null,null,null)),(l()(),t.tb(20,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Mb(21,null,["",""])),(l()(),t.tb(22,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),t.Mb(23,null,["",""])),(l()(),t.tb(24,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),t.tb(25,0,null,null,1,"span",[["class","start-text"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Age:"])),(l()(),t.tb(27,0,null,null,1,"span",[["class","span-info"]],null,null,null,null,null)),(l()(),t.Mb(28,null,["",""])),(l()(),t.tb(29,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),t.tb(30,0,null,null,1,"span",[["class","start-text"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Religion:"])),(l()(),t.tb(32,0,null,null,1,"span",[["class","span-info"]],null,null,null,null,null)),(l()(),t.Mb(33,null,["",""])),(l()(),t.tb(34,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),t.tb(35,0,null,null,1,"span",[["class","start-text"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Want Kids?"])),(l()(),t.tb(37,0,null,null,1,"span",[["class","span-info"]],null,null,null,null,null)),(l()(),t.Mb(38,null,["",""])),(l()(),t.tb(39,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),t.tb(40,0,null,null,1,"span",[["class","start-text"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Hobbies:"])),(l()(),t.tb(42,0,null,null,1,"span",[["class","span-info"]],null,null,null,null,null)),(l()(),t.Mb(43,null,["",""])),(l()(),t.tb(44,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t.tb(45,0,null,null,1,"span",[["class","start-text"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Description:"])),(l()(),t.tb(47,0,null,null,1,"div",[["id","description-info"]],null,null,null,null,null)),(l()(),t.Mb(48,null,["",""])),(l()(),t.tb(49,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(50,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(51,0,null,null,58,"ion-list",[],null,null,null,h.Z,h.r)),t.sb(52,49152,null,0,g.O,[t.h,t.k,t.y],null,null),(l()(),t.tb(53,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.updateAvatar()&&t),t}),h.W,h.p)),t.sb(54,49152,null,0,g.H,[t.h,t.k,t.y],null,null),(l()(),t.Mb(-1,0,["Change Profile Picture"])),(l()(),t.tb(56,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.updateUsername()&&t),t}),h.W,h.p)),t.sb(57,49152,null,0,g.H,[t.h,t.k,t.y],null,null),(l()(),t.Mb(-1,0,["Change Username"])),(l()(),t.tb(59,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.updateTitle()&&t),t}),h.W,h.p)),t.sb(60,49152,null,0,g.H,[t.h,t.k,t.y],null,null),(l()(),t.Mb(-1,0,["Change Title"])),(l()(),t.tb(62,0,null,0,13,"ion-item",[],null,null,null,h.W,h.p)),t.sb(63,49152,null,0,g.H,[t.h,t.k,t.y],null,null),(l()(),t.tb(64,0,null,0,2,"ion-label",[["class","start-text"]],null,null,null,h.X,h.q)),t.sb(65,49152,null,0,g.N,[t.h,t.k,t.y],null,null),(l()(),t.Mb(-1,0,["Update Age"])),(l()(),t.tb(67,0,null,0,8,"ion-select",[["interface","action-sheet"],["multiple","false"],["name","selectAge"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var a=!0,u=l.component;return"ionBlur"===n&&(a=!1!==t.Fb(l,69)._handleBlurEvent(e.target)&&a),"ionChange"===n&&(a=!1!==t.Fb(l,69)._handleChangeEvent(e.target)&&a),"ngModelChange"===n&&(a=!1!==(u.selectedAge=e)&&a),"ionChange"===n&&(a=!1!==u.updateAge()&&a),a}),h.hb,h.z)),t.sb(68,49152,null,0,g.kb,[t.h,t.k,t.y],{interface:[0,"interface"],interfaceOptions:[1,"interfaceOptions"],multiple:[2,"multiple"],name:[3,"name"],placeholder:[4,"placeholder"]},null),t.sb(69,16384,null,0,g.Ib,[t.k],null,null),t.Jb(1024,null,C.h,(function(l){return[l]}),[g.Ib]),t.sb(71,671744,null,0,C.m,[[8,null],[8,null],[8,null],[6,C.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,C.i,null,[C.m]),t.sb(73,16384,null,0,C.j,[[4,C.i]],null,null),(l()(),t.ib(16777216,null,0,1,null,B)),t.sb(75,278528,null,0,v.k,[t.P,t.L,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(76,0,null,0,13,"ion-item",[],null,null,null,h.W,h.p)),t.sb(77,49152,null,0,g.H,[t.h,t.k,t.y],null,null),(l()(),t.tb(78,0,null,0,2,"ion-label",[["class","start-text"]],null,null,null,h.X,h.q)),t.sb(79,49152,null,0,g.N,[t.h,t.k,t.y],null,null),(l()(),t.Mb(-1,0,["Update Religion"])),(l()(),t.tb(81,0,null,0,8,"ion-select",[["interface","action-sheet"],["multiple","false"],["name","selectReligion"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var a=!0,u=l.component;return"ionBlur"===n&&(a=!1!==t.Fb(l,83)._handleBlurEvent(e.target)&&a),"ionChange"===n&&(a=!1!==t.Fb(l,83)._handleChangeEvent(e.target)&&a),"ngModelChange"===n&&(a=!1!==(u.selectedReligion=e)&&a),"ionChange"===n&&(a=!1!==u.updateReligion()&&a),a}),h.hb,h.z)),t.sb(82,49152,null,0,g.kb,[t.h,t.k,t.y],{interface:[0,"interface"],interfaceOptions:[1,"interfaceOptions"],multiple:[2,"multiple"],name:[3,"name"],placeholder:[4,"placeholder"]},null),t.sb(83,16384,null,0,g.Ib,[t.k],null,null),t.Jb(1024,null,C.h,(function(l){return[l]}),[g.Ib]),t.sb(85,671744,null,0,C.m,[[8,null],[8,null],[8,null],[6,C.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,C.i,null,[C.m]),t.sb(87,16384,null,0,C.j,[[4,C.i]],null,null),(l()(),t.ib(16777216,null,0,1,null,J)),t.sb(89,278528,null,0,v.k,[t.P,t.L,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(90,0,null,0,13,"ion-item",[],null,null,null,h.W,h.p)),t.sb(91,49152,null,0,g.H,[t.h,t.k,t.y],null,null),(l()(),t.tb(92,0,null,0,2,"ion-label",[["class","start-text"]],null,null,null,h.X,h.q)),t.sb(93,49152,null,0,g.N,[t.h,t.k,t.y],null,null),(l()(),t.Mb(-1,0,["Update Have Kids"])),(l()(),t.tb(95,0,null,0,8,"ion-select",[["interface","action-sheet"],["multiple","false"],["name","selectKids"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var a=!0,u=l.component;return"ionBlur"===n&&(a=!1!==t.Fb(l,97)._handleBlurEvent(e.target)&&a),"ionChange"===n&&(a=!1!==t.Fb(l,97)._handleChangeEvent(e.target)&&a),"ngModelChange"===n&&(a=!1!==(u.selectedKids=e)&&a),"ionChange"===n&&(a=!1!==u.updateHaveKids()&&a),a}),h.hb,h.z)),t.sb(96,49152,null,0,g.kb,[t.h,t.k,t.y],{interface:[0,"interface"],interfaceOptions:[1,"interfaceOptions"],multiple:[2,"multiple"],name:[3,"name"],placeholder:[4,"placeholder"]},null),t.sb(97,16384,null,0,g.Ib,[t.k],null,null),t.Jb(1024,null,C.h,(function(l){return[l]}),[g.Ib]),t.sb(99,671744,null,0,C.m,[[8,null],[8,null],[8,null],[6,C.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,C.i,null,[C.m]),t.sb(101,16384,null,0,C.j,[[4,C.i]],null,null),(l()(),t.ib(16777216,null,0,1,null,T)),t.sb(103,278528,null,0,v.k,[t.P,t.L,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(104,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.updateHobbies()&&t),t}),h.W,h.p)),t.sb(105,49152,null,0,g.H,[t.h,t.k,t.y],null,null),(l()(),t.Mb(-1,0,["Update Hobbies"])),(l()(),t.tb(107,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.updateDescription()&&t),t}),h.W,h.p)),t.sb(108,49152,null,0,g.H,[t.h,t.k,t.y],null,null),(l()(),t.Mb(-1,0,["Update Description"])),(l()(),t.tb(110,0,null,null,21,"div",[["class","buttons"]],null,null,null,null,null)),(l()(),t.tb(111,0,null,null,3,"ion-row",[],null,null,null,h.fb,h.y)),t.sb(112,49152,null,0,g.gb,[t.h,t.k,t.y],null,null),(l()(),t.tb(113,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Add Photo"])),(l()(),t.tb(115,0,null,null,16,"ion-row",[],null,null,null,h.fb,h.y)),t.sb(116,49152,null,0,g.gb,[t.h,t.k,t.y],null,null),(l()(),t.tb(117,0,null,0,8,"ion-col",[["fxLayout","row"],["fxLayoutAlign","center center"]],null,null,null,h.R,h.k)),t.sb(118,49152,null,0,g.t,[t.h,t.k,t.y],null,null),t.sb(119,671744,null,0,y.b,[t.k,D.i,[2,y.e],D.f],{fxLayout:[0,"fxLayout"]},null),t.sb(120,671744,null,0,y.a,[t.k,D.i,[2,y.d],D.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.tb(121,0,null,0,4,"a",[["class","btn btn-primary button-hover"]],null,null,null,null,null)),(l()(),t.tb(122,0,null,null,2,"label",[["class","custom-file-upload"],["for","file-upload"]],null,null,null,null,null)),(l()(),t.tb(123,0,null,null,0,"i",[["class","fa fa-cloud-upload"]],null,null,null,null,null)),(l()(),t.Mb(124,null,[""," "])),(l()(),t.tb(125,0,null,null,0,"input",[["id","file-upload"],["name","upload_cont_img"],["style","display:none;"],["type","file"]],null,[[null,"change"]],(function(l,n,e){var t=!0;return"change"===n&&(t=!1!==l.component.onFileChanged(e)&&t),t}),null,null)),(l()(),t.tb(126,0,null,0,5,"ion-col",[["fxLayout","row"],["fxLayoutAlign","space-around center"]],null,null,null,h.R,h.k)),t.sb(127,49152,null,0,g.t,[t.h,t.k,t.y],null,null),t.sb(128,671744,null,0,y.b,[t.k,D.i,[2,y.e],D.f],{fxLayout:[0,"fxLayout"]},null),t.sb(129,671744,null,0,y.a,[t.k,D.i,[2,y.d],D.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.tb(130,0,null,0,1,"a",[["class","btn btn-secondary button-hover"],["color","success"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.onUpload()&&t),t}),null,null)),(l()(),t.Mb(-1,null,["Upload"])),(l()(),t.tb(132,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,[" Photos "])),(l()(),t.tb(134,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(135,0,null,null,4,"section",[["fxLayout","column"],["fxLayoutAlign","start center"]],null,null,null,null,null)),t.sb(136,671744,null,0,y.b,[t.k,D.i,[2,y.e],D.f],{fxLayout:[0,"fxLayout"]},null),t.sb(137,671744,null,0,y.a,[t.k,D.i,[2,y.d],D.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.tb(138,0,null,null,1,"a",[["class","oval"],["color","primary"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.launchPicModal()&&t),t}),null,null)),(l()(),t.tb(139,0,null,null,0,"i",[["class","fas fa-camera fa-2x"]],null,null,null,null,null)),(l()(),t.tb(140,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(141,0,null,null,4,"div",[["fxLayout","row"],["fxLayout.xs","column"],["fxLayoutAlign","space-between center"]],null,null,null,null,null)),t.sb(142,671744,null,0,y.b,[t.k,D.i,[2,y.e],D.f],{fxLayout:[0,"fxLayout"],"fxLayout.xs":[1,"fxLayout.xs"]},null),t.sb(143,671744,null,0,y.a,[t.k,D.i,[2,y.d],D.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.ib(16777216,null,null,1,null,q)),t.sb(145,278528,null,0,v.k,[t.P,t.L,t.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component;l(n,3,0,"dark"),l(n,16,0,"row"),l(n,17,0,"space-around center"),l(n,68,0,"action-sheet",e.ageActionSheetOptions,"false","selectAge",e.selectedAge?e.selectedAge:"Tap to update"),l(n,71,0,"selectAge",e.selectedAge),l(n,75,0,e.ages),l(n,82,0,"action-sheet",e.religionActionSheetOptions,"false","selectReligion",e.selectedReligion?e.selectedReligion:"Tap to update"),l(n,85,0,"selectReligion",e.selectedReligion),l(n,89,0,e.religions),l(n,96,0,"action-sheet",e.kidsActionSheetOptions,"false","selectKids",e.selectedKids?e.selectedKids:"Tap to update"),l(n,99,0,"selectKids",e.selectedKids),l(n,103,0,e.kidsOptions),l(n,119,0,"row"),l(n,120,0,"center center"),l(n,128,0,"row"),l(n,129,0,"space-around center"),l(n,136,0,"column"),l(n,137,0,"start center"),l(n,142,0,"row","column"),l(n,143,0,"space-between center"),l(n,145,0,e.imageUrls)}),(function(l,n){var e=n.component;l(n,2,0,t.Fb(n,3)._toolbarRows.length>0,0===t.Fb(n,3)._toolbarRows.length),l(n,19,0,e.user.photoURL),l(n,21,0,e.user.displayName),l(n,23,0,e.user.title),l(n,28,0,e.user.age),l(n,33,0,e.user.religion),l(n,38,0,e.user.haveKids),l(n,43,0,e.user.hobbies),l(n,48,0,e.user.description),l(n,67,0,t.Fb(n,73).ngClassUntouched,t.Fb(n,73).ngClassTouched,t.Fb(n,73).ngClassPristine,t.Fb(n,73).ngClassDirty,t.Fb(n,73).ngClassValid,t.Fb(n,73).ngClassInvalid,t.Fb(n,73).ngClassPending),l(n,81,0,t.Fb(n,87).ngClassUntouched,t.Fb(n,87).ngClassTouched,t.Fb(n,87).ngClassPristine,t.Fb(n,87).ngClassDirty,t.Fb(n,87).ngClassValid,t.Fb(n,87).ngClassInvalid,t.Fb(n,87).ngClassPending),l(n,95,0,t.Fb(n,101).ngClassUntouched,t.Fb(n,101).ngClassTouched,t.Fb(n,101).ngClassPristine,t.Fb(n,101).ngClassDirty,t.Fb(n,101).ngClassValid,t.Fb(n,101).ngClassInvalid,t.Fb(n,101).ngClassPending),l(n,124,0,e.selectedFileName)}))}function W(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,1,"page-account",[],null,null,null,z,j)),t.sb(1,4308992,null,0,F,[t.h,g.b,M.a,H,O.a,g.b,K.m,P.a,g.Db],null,null)],(function(l,n){l(n,1,0)}),null)}var V=t.pb("page-account",F,W,{},{},[]),E=e("5GAg"),Z=e("DkaU"),Q=e("Mc5n"),X=e("hOhj"),G=e("QQfA"),Y=e("IP0z"),ll=e("/Co4"),nl=e("POq0"),el=e("Xd0L"),tl=e("s6ns"),al=e("821u"),ul=e("gavF"),il=e("JjoW"),sl=e("Mz6y"),ol=e("cUpR"),rl=e("OIZN"),cl=e("7kcP"),bl=e("qJ5m"),dl=e("Xr7G"),hl=e("zQui"),gl=e("zMNK"),pl=e("KPQW"),ml=e("lwm9"),fl=e("Fwaw"),vl=e("mkRZ"),yl=e("igqZ"),Dl=e("r0V8"),Cl=e("kNGD"),kl=e("02hT"),xl=e("5Bek"),Ml=e("c9fC"),Ol=e("FVPZ"),Pl=e("Gi4r"),wl=e("oapL"),Fl=e("HsOI"),Ul=e("ZwOa"),Al=e("Q+lL"),Sl=e("8P0U"),_l=e("W5yJ"),Ll=e("elxJ"),Rl=e("lT8R"),Nl=e("pBi1"),Il=e("AaDx"),Hl=e("rWV4"),Kl=e("8rEH"),jl=e("dFDH"),Bl=e("BV1i"),$l=e("qJ50"),Jl=e("7QIX"),Tl=e("ura0"),ql=e("Nhcz"),zl=e("u9T3"),Wl=e("5dmV"),Vl=e("PCNd");class El{}var Zl=e("dvZr");e.d(n,"AccountModuleNgFactory",(function(){return Ql}));var Ql=t.qb(a,[],(function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[u.a,i.a,s.b,s.a,o.a,r.a,r.b,c.a,b.a,d.a,V]],[3,t.j],t.w]),t.Db(4608,v.n,v.m,[t.t,[2,v.C]]),t.Db(4608,g.c,g.c,[t.y,t.g]),t.Db(4608,g.Db,g.Db,[g.c,t.j,t.q]),t.Db(4608,g.Hb,g.Hb,[g.c,t.j,t.q]),t.Db(4608,C.c,C.c,[]),t.Db(4608,C.r,C.r,[]),t.Db(135680,E.h,E.h,[t.y,f.a]),t.Db(4608,Z.e,Z.e,[t.L]),t.Db(4608,Q.a,Q.a,[v.d,t.y,X.e,Q.c]),t.Db(4608,G.a,G.a,[G.g,G.c,t.j,G.f,G.d,t.q,t.y,v.d,Y.b,[2,v.h]]),t.Db(5120,G.h,G.i,[G.a]),t.Db(5120,ll.a,ll.b,[G.a]),t.Db(4608,nl.c,nl.c,[]),t.Db(4608,el.d,el.d,[]),t.Db(5120,tl.b,tl.c,[G.a]),t.Db(135680,tl.d,tl.d,[G.a,t.q,[2,v.h],[2,tl.a],tl.b,[3,tl.d],G.c]),t.Db(4608,al.h,al.h,[]),t.Db(5120,al.a,al.b,[G.a]),t.Db(5120,ul.a,ul.d,[G.a]),t.Db(4608,el.c,el.u,[[2,el.h],f.a]),t.Db(5120,il.a,il.b,[G.a]),t.Db(5120,sl.b,sl.c,[G.a]),t.Db(4608,ol.e,el.e,[[2,el.i],[2,el.m]]),t.Db(5120,rl.b,rl.a,[[3,rl.b]]),t.Db(5120,cl.d,cl.a,[[3,cl.d]]),t.Db(5120,bl.b,bl.a,[[3,bl.b]]),t.Db(5120,t.b,(function(l,n){return[D.j(l,n)]}),[v.d,t.A]),t.Db(4608,dl.a,dl.a,[N.d,[2,N.c],[2,dl.b],[2,dl.c],t.A,t.y,[2,dl.d]]),t.Db(4608,H,H,[N.d,[2,N.c],[2,I],t.A,t.y]),t.Db(1073742336,v.c,v.c,[]),t.Db(1073742336,g.Bb,g.Bb,[]),t.Db(1073742336,C.q,C.q,[]),t.Db(1073742336,C.n,C.n,[]),t.Db(1073742336,C.f,C.f,[]),t.Db(1073742336,hl.p,hl.p,[]),t.Db(1073742336,Z.c,Z.c,[]),t.Db(1073742336,Q.b,Q.b,[]),t.Db(1073742336,Y.a,Y.a,[]),t.Db(1073742336,el.m,el.m,[[2,el.f],[2,ol.f]]),t.Db(1073742336,f.b,f.b,[]),t.Db(1073742336,el.t,el.t,[]),t.Db(1073742336,el.r,el.r,[]),t.Db(1073742336,el.p,el.p,[]),t.Db(1073742336,gl.g,gl.g,[]),t.Db(1073742336,X.c,X.c,[]),t.Db(1073742336,G.e,G.e,[]),t.Db(1073742336,ll.c,ll.c,[]),t.Db(1073742336,nl.d,nl.d,[]),t.Db(1073742336,E.a,E.a,[]),t.Db(1073742336,pl.a,pl.a,[]),t.Db(1073742336,ml.c,ml.c,[]),t.Db(1073742336,fl.c,fl.c,[]),t.Db(1073742336,vl.a,vl.a,[]),t.Db(1073742336,yl.a,yl.a,[]),t.Db(1073742336,Dl.b,Dl.b,[]),t.Db(1073742336,Dl.a,Dl.a,[]),t.Db(1073742336,Cl.b,Cl.b,[]),t.Db(1073742336,tl.g,tl.g,[]),t.Db(1073742336,al.i,al.i,[]),t.Db(1073742336,kl.a,kl.a,[]),t.Db(1073742336,xl.c,xl.c,[]),t.Db(1073742336,Ml.a,Ml.a,[]),t.Db(1073742336,el.n,el.n,[]),t.Db(1073742336,Ol.a,Ol.a,[]),t.Db(1073742336,Pl.c,Pl.c,[]),t.Db(1073742336,wl.c,wl.c,[]),t.Db(1073742336,Fl.d,Fl.d,[]),t.Db(1073742336,Ul.b,Ul.b,[]),t.Db(1073742336,Al.a,Al.a,[]),t.Db(1073742336,ul.c,ul.c,[]),t.Db(1073742336,ul.b,ul.b,[]),t.Db(1073742336,el.v,el.v,[]),t.Db(1073742336,el.o,el.o,[]),t.Db(1073742336,il.c,il.c,[]),t.Db(1073742336,sl.e,sl.e,[]),t.Db(1073742336,rl.c,rl.c,[]),t.Db(1073742336,Sl.a,Sl.a,[]),t.Db(1073742336,_l.a,_l.a,[]),t.Db(1073742336,Ll.a,Ll.a,[]),t.Db(1073742336,Rl.a,Rl.a,[]),t.Db(1073742336,Nl.b,Nl.b,[]),t.Db(1073742336,Nl.a,Nl.a,[]),t.Db(1073742336,cl.e,cl.e,[]),t.Db(1073742336,Il.a,Il.a,[]),t.Db(1073742336,Hl.j,Hl.j,[]),t.Db(1073742336,Kl.m,Kl.m,[]),t.Db(1073742336,jl.d,jl.d,[]),t.Db(1073742336,m.b,m.b,[]),t.Db(1073742336,Bl.a,Bl.a,[]),t.Db(1073742336,$l.e,$l.e,[]),t.Db(1073742336,bl.c,bl.c,[]),t.Db(1073742336,Jl.c,Jl.c,[]),t.Db(1073742336,D.c,D.c,[]),t.Db(1073742336,y.c,y.c,[]),t.Db(1073742336,Tl.a,Tl.a,[]),t.Db(1073742336,ql.a,ql.a,[]),t.Db(1073742336,zl.a,zl.a,[[2,D.g],t.A]),t.Db(1073742336,Wl.a,Wl.a,[]),t.Db(1073742336,Vl.a,Vl.a,[]),t.Db(1073742336,K.n,K.n,[[2,K.s],[2,K.m]]),t.Db(1073742336,El,El,[]),t.Db(1073742336,a,a,[]),t.Db(256,Cl.a,{separatorKeyCodes:[Zl.f]},[]),t.Db(256,el.g,el.k,[]),t.Db(1024,K.k,(function(){return[[{path:"",component:F}]]}),[])])}))}}]);