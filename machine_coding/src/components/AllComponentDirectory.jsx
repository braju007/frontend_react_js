import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import all your components
import { SimpleCounter } from './SimpleCounter';
import { SimpleRefExample } from './SimpleRefExample';
import { TodoList } from './TodoList';
import { PaginationExample } from './PaginationExample';
import { StarRating } from './StarRating';
import { CreateDynamicCards } from './CreateDynamicButtons';
import { StopWatch } from './StopWatch';
import { FetchUsersData } from './FetchUsersData';
import { TrafficLights } from './TrafficLights';
import { SearchQuery } from './SearchQuery';
import { VirtualisedListData } from './VirtualisedListData';
import { TogglePasswordVisibility } from './TogglePasswordVisibility';
import { UtilizeDebounceHook } from './UtilizeDebounceHook';
import { ValidateOTP } from './ValidateOTP';
import { FileExplorer } from './FileExplorer';
import { TimerStopWatch } from './TimerStopWatch';
import BMICalculator from './BMICalculator';
import { ChipsInput } from './ChipsInput';
import { UtilizeCounterHook } from './UtilizeCounterHook';
import { GuessTheNumber } from './GuessTheNumber';
import { StringZigzagConverter } from './StringZigzagConverter';
import { TabsSwitcher } from './TabsSwitcher';
import { DiceRoller } from './DiceRoller';
import { MultiStepForm } from './MultiStepForm';
import { SimpleUseReducer } from './SimpleUseReducer';
import { DropDownExample } from './DropDownExample';
import { CalculateTwoNumbers } from './CalculateTwoNumbers';
import { SortListSimpleExample } from './SortListSimpleExample';
import { UndoRedoTextExample } from './UndoRedoTextExample';
import { CardGame } from './CardGame';
import { CountDownTimer } from './CountDownTimer';
import { ToggleDarkLightTheme } from './ToggleDarkLightTheme';
import { LocalStorageUsage } from './LocalStorageUsage';
import { CheckboxExample } from './CheckboxExample';
import { RadioButtonsCreateDynamically } from './RadioButtonsCreateDynamically';
import { ModalSimpleExample } from './ModalSimpleExample';
import { SortListInMultipleWay } from './SortListInMultipleWay';
import { CardCarousel } from './CardCarousel';
import { Accordion } from './Accordion';
import { DataFetchAndTabularData } from './DataFetchAndTabularData';
import { CounterWithPreviousValue } from './CounterWithPreviousValue';
import { UtilizeUseToggleHook } from './UtilizeUseToggleHook';
import { ProgressBar } from './ProgressBar';
import { ShowHideUserBio } from './ShowHideUserBio';
import { ImageGallery } from './ImageGallery';

// 🔹 List of components and their routes
const componentsList = [
  { name: 'SimpleCounter', path: '/SimpleCounter', component: SimpleCounter },
  {
    name: 'SimpleRefExample',
    path: '/SimpleRefExample',
    component: SimpleRefExample,
  },
  { name: 'TodoList', path: '/TodoList', component: TodoList },
  {
    name: 'PaginationExample',
    path: '/PaginationExample',
    component: PaginationExample,
  },
  { name: 'StarRating', path: '/StarRating', component: StarRating },
  {
    name: 'CreateDynamicCards',
    path: '/CreateDynamicCards',
    component: CreateDynamicCards,
  },
  { name: 'StopWatch', path: '/StopWatch', component: StopWatch },
  {
    name: 'FetchUsersData',
    path: '/FetchUsersData',
    component: FetchUsersData,
  },
  { name: 'TrafficLights', path: '/TrafficLights', component: TrafficLights },
  { name: 'SearchQuery', path: '/SearchQuery', component: SearchQuery },
  {
    name: 'VirtualisedListData',
    path: '/VirtualisedListData',
    component: VirtualisedListData,
  },
  {
    name: 'TogglePasswordVisibility',
    path: '/TogglePasswordVisibility',
    component: TogglePasswordVisibility,
  },
  {
    name: 'UtilizeDebounceHook',
    path: '/UtilizeDebounceHook',
    component: UtilizeDebounceHook,
  },
  { name: 'ValidateOTP', path: '/ValidateOTP', component: ValidateOTP },
  { name: 'FileExplorer', path: '/FileExplorer', component: FileExplorer },
  {
    name: 'TimerStopWatch',
    path: '/TimerStopWatch',
    component: TimerStopWatch,
  },
  { name: 'BMICalculator', path: '/BMICalculator', component: BMICalculator },
  { name: 'ChipsInput', path: '/ChipsInput', component: ChipsInput },
  {
    name: 'UtilizeCounterHook',
    path: '/UtilizeCounterHook',
    component: UtilizeCounterHook,
  },
  {
    name: 'GuessTheNumber',
    path: '/GuessTheNumber',
    component: GuessTheNumber,
  },
  {
    name: 'StringZigzagConverter',
    path: '/StringZigzagConverter',
    component: StringZigzagConverter,
  },
  { name: 'TabsSwitcher', path: '/TabsSwitcher', component: TabsSwitcher },
  { name: 'DiceRoller', path: '/DiceRoller', component: DiceRoller },
  { name: 'MultiStepForm', path: '/MultiStepForm', component: MultiStepForm },
  {
    name: 'SimpleUseReducer',
    path: '/SimpleUseReducer',
    component: SimpleUseReducer,
  },
  {
    name: 'DropDownExample',
    path: '/DropDownExample',
    component: DropDownExample,
  },
  {
    name: 'CalculateTwoNumbers',
    path: '/CalculateTwoNumbers',
    component: CalculateTwoNumbers,
  },
  {
    name: 'SortListSimpleExample',
    path: '/SortListSimpleExample',
    component: SortListSimpleExample,
  },
  {
    name: 'UndoRedoTextExample',
    path: '/UndoRedoTextExample',
    component: UndoRedoTextExample,
  },
  {
    name: 'CardGame',
    path: '/CardGame',
    component: CardGame,
  },
  {
    name: 'CountDownTimer',
    path: '/CountDownTimer',
    component: CountDownTimer,
  },
  {
    name: 'ToggleDarkLightTheme',
    path: '/ToggleDarkLightTheme',
    component: ToggleDarkLightTheme,
  },
  {
    name: 'LocalStorageUsage',
    path: '/LocalStorageUsage',
    component: LocalStorageUsage,
  },
  {
    name: 'CheckboxExample',
    path: '/CheckboxExample',
    component: CheckboxExample,
  },
  {
    name: 'RadioButtonsCreateDynamically',
    path: '/RadioButtonsCreateDynamically',
    component: RadioButtonsCreateDynamically,
  },
  {
    name: 'ModalSimpleExample',
    path: '/ModalSimpleExample',
    component: ModalSimpleExample,
  },
  {
    name: 'SortListInMultipleWay',
    path: '/SortListInMultipleWay',
    component: SortListInMultipleWay,
  },
  {
    name: 'CardCarousel',
    path: '/CardCarousel',
    component: CardCarousel,
  },
  {
    name: 'Accordion',
    path: '/Accordion',
    component: Accordion,
  },
  {
    name: 'DataFetchAndTabularData',
    path: '/DataFetchAndTabularData',
    component: DataFetchAndTabularData,
  },
  {
    name: 'CounterWithPreviousValue',
    path: '/CounterWithPreviousValue',
    component: CounterWithPreviousValue,
  },
  {
    name: 'UtilizeUseToggleHook',
    path: '/UtilizeUseToggleHook',
    component: UtilizeUseToggleHook,
  },
  {
    name: 'ProgressBar',
    path: '/ProgressBar',
    component: ProgressBar,
  },
  {
    name: 'ShowHideUserBio',
    path: '/ShowHideUserBio',
    component: ShowHideUserBio,
  },
  {
    name: 'ImageGallery',
    path: '/ImageGallery',
    component: ImageGallery,
  },
];

// 🔹 Reusable Back Button
const BackToHome = () => (
  <div style={{ marginTop: '20px' }}>
    <Link to="/">← Back to Home</Link>
  </div>
);

// 🔹 Wrapper to show back button in each component
const WithBackToHome = ({ Component }) => (
  <div>
    <Component />
    <BackToHome />
  </div>
);

// 🔹 Home Component with numbered links
const Home = () => {
  return (
    <div>
      <h2>This is the Home Component</h2>
      <nav
        style={{
          margin: '20px 0',
          fontSize: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start', // left-align content
          gap: '8px', // spacing between each item
        }}
      >
        {componentsList.map((item, index) => (
          <div key={item.path}>
            {index + 1}. <Link to={item.path}>{item.name}</Link>
          </div>
        ))}
      </nav>
    </div>
  );
};

// 🔹 Main App Component
export const AllComponentsDirectory = () => {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {componentsList.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={<WithBackToHome Component={Component} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
};
